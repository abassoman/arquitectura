import { Component, OnInit } from '@angular/core';
import { RegistroventaService, Venta } from 'src/app/services/registroventa.service';

@Component({
  selector: 'app-listar-ventas',
  templateUrl: './listar-ventas.component.html',
  styleUrls: ['./listar-ventas.component.scss'],
})
export class ListarVentasComponent  implements OnInit {

  venta:Venta[]=[]

  constructor(private registroVenta:RegistroventaService) { }

  ngOnInit() {
    this.registroVenta.getVenta().subscribe(venta=>{
      this.venta = venta;
    })
  }

}
