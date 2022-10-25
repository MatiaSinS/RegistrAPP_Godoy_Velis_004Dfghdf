import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-cerrar-sesion',
  templateUrl: './cerrar-sesion.page.html',
  styleUrls: ['./cerrar-sesion.page.scss'],
})
export class CerrarSesionPage implements OnInit {

  constructor(private navController:NavController,
              private menuController: MenuController) { }

  ngOnInit() {
  }

  menuUsuario(){
    this.menuController.open('end');
  }
  
  cerrarSesion(){
    localStorage.removeItem('ingresado-alumno');
    localStorage.removeItem('ingresado-docente');
    localStorage.removeItem('nombre');
    localStorage.removeItem('apellido');
    localStorage.removeItem('rut');
    localStorage.removeItem('correo');
    localStorage.removeItem('sede');
    this.navController.navigateRoot('login');

  }

}
