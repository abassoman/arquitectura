import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecomendacionProductoPageRoutingModule } from './recomendacion-producto-routing.module';

import { RecomendacionProductoPage } from './recomendacion-producto.page';
import { RecomendacionProductosComponent } from '../components/recomendacion-productos/recomendacion-productos.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecomendacionProductoPageRoutingModule
  ],
  declarations: [RecomendacionProductoPage, RecomendacionProductosComponent]
})
export class RecomendacionProductoPageModule {}
