import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecomendacionProductoPage } from './recomendacion-producto.page';

const routes: Routes = [
  {
    path: '',
    component: RecomendacionProductoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecomendacionProductoPageRoutingModule {}
