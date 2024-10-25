import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarVentaPageRoutingModule } from './listar-venta-routing.module';

import { ListarVentaPage } from './listar-venta.page';

import { ListarVentasComponent } from '../components/listar-ventas/listar-ventas.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarVentaPageRoutingModule,
    SharedModule
  ],
  declarations: [ListarVentaPage, ListarVentasComponent]
})
export class ListarVentaPageModule {}
