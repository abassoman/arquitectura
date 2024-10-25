import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {

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
