import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { IonicModule } from '@ionic/angular';  // Importa esto para los componentes de Ionic

@NgModule({
  declarations: [SidebarComponent],  // Declara SidebarComponent aquí
  imports: [
    CommonModule,
    IonicModule  // Importa IonicModule para que funcione en componentes de Ionic
  ],
  exports: [SidebarComponent]  // Exporta SidebarComponent para usarlo en otros módulos
})
export class SharedModule { }
