import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';

export interface Venta{
  id?:string;
  listacompra:string;
  preciototal:number;
  correocompra:string;
}

@Injectable({
  providedIn: 'root'
})
export class RegistroventaService {

  private collectionName="ventas";
  constructor(private firestore:AngularFirestore) { }


  addVenta(venta:Venta): Promise<void>{
    const id = this.firestore.createId();
    return this.firestore.collection(this.collectionName).doc(id).set({...venta,id});
  }

  getVenta():Observable<Venta[]>{
    return this.firestore.collection<Venta>(this.collectionName).valueChanges();
  }

  getTopProductos(): Observable<{ producto: string, cantidad: number }[]> {
    return this.getVenta().pipe(
      map(ventas => {
        const productoContador: { [key: string]: number } = {};

        ventas.forEach(venta => {
          const productos = venta.listacompra.split(','); // Convertir la lista de productos en un array
          productos.forEach(producto => {
            producto = producto.trim(); // Eliminar espacios adicionales
            if (productoContador[producto]) {
              productoContador[producto]++;
            } else {
              productoContador[producto] = 1;
            }
          });
        });

        return Object.keys(productoContador)
          .map(producto => ({
            producto: producto,
            cantidad: productoContador[producto]
          }))
          .sort((a, b) => b.cantidad - a.cantidad); // Ordenar por cantidad de ventas
      })
    );
  }
}
 