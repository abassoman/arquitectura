import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VentaPageRoutingModule } from './venta-routing.module';

import { VentaPage } from './venta.page';
import { RegistroventaComponent } from '../components/registroventa/registroventa.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VentaPageRoutingModule
  ],
  declarations: [VentaPage,RegistroventaComponent]
})
export class VentaPageModule {}
