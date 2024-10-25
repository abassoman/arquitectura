import { Component, OnInit } from '@angular/core';
import { RegistroventaService } from 'src/app/services/registroventa.service';

@Component({
  selector: 'app-recomendacion-productos',
  templateUrl: './recomendacion-productos.component.html',
  styleUrls: ['./recomendacion-productos.component.scss'],
})
export class RecomendacionProductosComponent  implements OnInit {

  productosMasVendidos: { producto: string, cantidad: number }[] = [];

  constructor(private ventaService: RegistroventaService) { }

  ngOnInit() {
    this.ventaService.getTopProductos().subscribe((productos) => {
      this.productosMasVendidos = productos;
    });
  }

  
}
