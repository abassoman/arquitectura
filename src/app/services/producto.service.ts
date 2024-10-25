import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

export interface Producto{
  id?:string;
  nombreProducto:string;
  marca:string;
  precio:number;
  cantidad:number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private collectionName="productos";
  constructor(private firestore:AngularFirestore) { }


  addProducto(producto:Producto): Promise<void>{
    const id = this.firestore.createId();
    return this.firestore.collection(this.collectionName).doc(id).set({...producto,id});
  }

  updateProductoCantidad(id: string, nuevaCantidad: number): Promise<void> {
    return this.firestore
      .collection(this.collectionName)
      .doc(id)  // Se pasa el id del producto que se va a modificar
      .update({ cantidad: nuevaCantidad });  // Solo se actualiza la cantidad
  }

  getProducto():Observable<Producto[]>{
    return this.firestore.collection<Producto>(this.collectionName).valueChanges();
  }
}
