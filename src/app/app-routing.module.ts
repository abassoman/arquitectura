import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { authGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule),
    canActivate:[authGuard]
  },
  {
    path: 'registrar',
    loadChildren: () => import('./registrar/registrar.module').then( m => m.RegistrarPageModule)
  },
  {
    path: 'listar-producto',
    loadChildren: () => import('./listar-productos/listar-productos.module').then( m => m.ListarProductosPageModule),
    canActivate:[authGuard]
  },
  {
    path: 'listar-venta',
    loadChildren: () => import('./listar-venta/listar-venta.module').then( m => m.ListarVentaPageModule),
    canActivate:[authGuard]
  },
  {
    path: 'venta',
    loadChildren: () => import('./venta/venta.module').then( m => m.VentaPageModule),
    canActivate:[authGuard]
  },
  {
    path: 'recomendacion-producto',
    loadChildren: () => import('./recomendacion-producto/recomendacion-producto.module').then( m => m.RecomendacionProductoPageModule),
    canActivate:[authGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
