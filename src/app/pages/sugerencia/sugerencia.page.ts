import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';



@Component({
  selector: 'app-sugerencia',
  templateUrl: './sugerencia.page.html',
  styleUrls: ['./sugerencia.page.scss'],
})
export class SugerenciaPage implements OnInit {


  constructor(private menuController: MenuController) { }


  ngOnInit() {
  }

  menuUsuario(){
    this.menuController.open('end');
  }
  usuario={
    suge:'',
    email:'',
  }

  onSubmit(){
    console.log('submit');
    console.log(this.usuario);
    
  }
}
