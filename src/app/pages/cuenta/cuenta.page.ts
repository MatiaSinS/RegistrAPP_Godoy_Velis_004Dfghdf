import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.page.html',
  styleUrls: ['./cuenta.page.scss'],
})
export class CuentaPage implements OnInit {

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }

  menuUsuario(){
    this.menuController.open('end');
  }

  nombre = localStorage.getItem('nombre');
  apellido = localStorage.getItem('apellido');
  rut = localStorage.getItem('rut');
  correo = localStorage.getItem('correo');
  sede = localStorage.getItem('sede');

}
