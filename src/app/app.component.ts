import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/inicio', icon: 'home' },
    { title: 'Listar Producto', url: '/listar-producto', icon: 'cube' },
    { title: 'Listar Venta', url: '/listar-venta', icon: 'archive' },
    { title: 'Venta', url: '/venta', icon: 'receipt' },
    { title: 'Recomendación de producto', url: '/recomendacion-producto', icon: 'checkmark' },
  ];
  
  constructor(
    private authService: AuthService, 
    private router: Router, 
    private menuController: MenuController  // Inyectamos MenuController
  ) {
    this.initializeApp();  // Llamamos a la función para inicializar la app
  }
  
  checkMenuVisibility(url: string) {
    // Oculta el menú en las rutas
    if ( url === '/home' ||  url === '/registrar') {
      this.menuController.enable(false);
    } else {
      this.menuController.enable(true);
    }
  }
  
  initializeApp() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.checkMenuVisibility(event.url);
      }
    });
  }
  
  logout() {
    this.authService.logout().then(() => {
      // Redirigir al usuario a la página de inicio de sesión o página principal
      this.router.navigate(['/home']);
    }).catch(error => {
      console.error('Error al cerrar sesión:', error);
    });
  }
}
