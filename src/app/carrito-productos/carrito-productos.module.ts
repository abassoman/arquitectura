import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { CarritoProductosPageRoutingModule } from './carrito-productos-routing.module';
import { CarritoProductosPage } from './carrito-productos.page';
import { CarritoProductosComponent } from '../components/carrito-productos/carrito-productos.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarritoProductosPageRoutingModule
  ],
  declarations: [CarritoProductosPage, CarritoProductosComponent]
})
export class CarritoProductosPageModule {}
