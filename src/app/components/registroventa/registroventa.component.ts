import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { Producto, ProductoService } from 'src/app/services/producto.service';
import { RegistroventaService,Venta } from 'src/app/services/registroventa.service';

@Component({
  selector: 'app-registroventa',
  templateUrl: './registroventa.component.html',
  styleUrls: ['./registroventa.component.scss'],
})
export class RegistroventaComponent  implements OnInit {

  //preciototal:number;  correocompra:string;  listacompra:string;
  producto:Producto[]=[]

  selectedProducts: any[] = [];

  venta:Venta = {listacompra:"", preciototal:0, correocompra:""}

  idVenta: string[] = []; // Arreglo para almacenar los IDs de los productos
  cantidad: number[] = []; // Arreglo para almacenar las nuevas cantidades
  

  constructor(private productoService: ProductoService,
              private registroventaService: RegistroventaService,
              private authService: AuthService) { }

  ngOnInit() {
    this.productoService.getProducto().subscribe(producto=>{
      this.producto = producto;
    })
  }

  modificarCantidad(id: string, nuevaCantidad: number) {
  this.productoService.updateProductoCantidad(id, nuevaCantidad)
    .then(() => {
      console.log(`Cantidad actualizada exitosamente para producto con ID: ${id}`);
    })
    .catch(error => {
      console.error(`Error al actualizar la cantidad del producto con ID: ${id}:`, error);
    });
}
  

  addVenta() {
    this.authService.getUserEmail().then(email => {
      if (email) {
        this.venta.correocompra = email; // Guarda el correo del usuario
  
        // Procesa los productos seleccionados
        this.venta.listacompra = this.selectedProducts.map(p => p.nombre).join(', ');
        this.venta.preciototal = this.selectedProducts.reduce((total, p) => total + p.precio, 0);
  
        // Almacena los IDs de los productos seleccionados
        this.idVenta = this.selectedProducts.map(p => p.id);  // Array de IDs
        console.log(this.idVenta);
  
        // Almacena las nuevas cantidades (por ejemplo, restando 1 a la cantidad actual)
        this.cantidad = this.selectedProducts.map(p => p.cantidad - 1);  // Array de cantidades
        console.log(this.cantidad);
  
        // Agrega la venta
        this.registroventaService.addVenta(this.venta).then(() => {
          alert("Venta Agregada Correctamente!");
          this.venta = { listacompra: "", preciototal: 0, correocompra: "" };
          this.selectedProducts = []; // Limpia la selección después de agregar la venta
  
          // Ahora, recorre los productos seleccionados para actualizar la cantidad de cada uno
          this.idVenta.forEach((id, index) => {
            this.modificarCantidad(id, this.cantidad[index]);
          });
        }).catch(error => {
          alert("Error al ingresar una Venta: " + error);
        });
  
      } else {
        alert("No se pudo obtener el correo del usuario.");
      }
    }).catch(error => {
      alert("Error al obtener el correo del usuario: " + error);
    });
  }
 
}
