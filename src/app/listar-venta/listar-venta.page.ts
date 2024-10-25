import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-listar-venta',
  templateUrl: './listar-venta.page.html',
  styleUrls: ['./listar-venta.page.scss'],
})
export class ListarVentaPage implements OnInit {

  constructor(private menu: MenuController) { }

  ngOnInit() {
  }

  openSidebar() {
    this.menu.open('sidebarMenu'); // Abre el menú con el ID "sidebarMenu"
  }
  
  closeSidebar() {
    this.menu.close('sidebarMenu'); // Cierra el menú con el ID "sidebarMenu"
  }
}
