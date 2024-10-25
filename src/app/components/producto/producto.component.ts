import { Component, OnInit } from '@angular/core';
import { ProductoService, Producto } from 'src/app/services/producto.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss'],
})
export class ProductoComponent  implements OnInit {

  producto:Producto = { nombreProducto:"", marca:"", precio:0, cantidad:0}
  constructor(private productoService:ProductoService, private aService:AuthService, private router:Router) { }

  ngOnInit() {}

  addProducto(){
    this.productoService.addProducto(this.producto).then(()=>{
      alert("Agregado Correctamente!")
      this.producto = { nombreProducto:"", marca:"", precio:0 ,cantidad:0}

    }).catch(error=>{alert("ERROR AL AGREGAR " + error)})
  }

  logout(){
    this.aService.logout();
    alert("Sesión Cerrada")
    this.router.navigate(["/home"]);
  }
}
