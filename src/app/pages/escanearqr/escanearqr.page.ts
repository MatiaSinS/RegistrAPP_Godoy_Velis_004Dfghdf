import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';



@Component({
  selector: 'app-escanearqr',
  templateUrl: './escanearqr.page.html',
  styleUrls: ['./escanearqr.page.scss'],
})
export class EscanearqrPage implements OnInit {

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }


  menuUsuario(){
    this.menuController.open('end');
  }
  
  nombre = localStorage.getItem('nombre');


}
