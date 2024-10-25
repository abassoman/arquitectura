import { Component, OnInit } from '@angular/core';
import { ProductoService, Producto } from 'src/app/services/producto.service';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.scss'],
})
export class ListarProductosComponent implements OnInit {

  producto:Producto[]=[]
 
  constructor(private productoService:ProductoService) { }

  ngOnInit() {
    this.productoService.getProducto().subscribe(producto=>{
      this.producto = producto;
    })
  }

}
