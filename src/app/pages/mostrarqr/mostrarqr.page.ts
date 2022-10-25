import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-mostrarqr',
  templateUrl: './mostrarqr.page.html',
  styleUrls: ['./mostrarqr.page.scss'],
})
export class MostrarqrPage implements OnInit {

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

}
