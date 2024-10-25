import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-productos.page.html',
  styleUrls: ['./listar-productos.page.scss'],
})
export class ListarProductosPage implements OnInit {

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
