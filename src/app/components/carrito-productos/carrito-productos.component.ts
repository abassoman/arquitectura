import { Component, OnInit } from '@angular/core';
import { ProductoService, Producto } from 'src/app/services/producto.service';

@Component({
  selector: 'app-carrito-producto',
  templateUrl: './carrito-productos.component.html',
  styleUrls: ['./carrito-productos.component.scss'],
})
export class CarritoProductosComponent  implements OnInit {

  producto:Producto[]=[]

  constructor(private productoService:ProductoService) { }

  ngOnInit() {
    this.productoService.getProducto().subscribe(producto=>{
      this.producto = producto;
    })
  }

}
