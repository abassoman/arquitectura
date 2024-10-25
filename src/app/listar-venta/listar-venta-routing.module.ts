import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarVentaPage } from './listar-venta.page';

const routes: Routes = [
  {
    path: '',
    component: ListarVentaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarVentaPageRoutingModule {}
