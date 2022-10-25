import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';



@Component({
  selector: 'app-crearqr',
  templateUrl: './crearqr.page.html',
  styleUrls: ['./crearqr.page.scss'],
})
export class CrearqrPage implements OnInit {

  constructor(private menuController: MenuController) { }


  ngOnInit() {
  }


  menuUsuario(){
    this.menuController.open('end');
  }
  usuario={
    password:'',
    email:'',
  }

  onSubmit(){
    console.log('submit');
    console.log(this.usuario);
    
  }

  nombre = localStorage.getItem('nombre');


}
