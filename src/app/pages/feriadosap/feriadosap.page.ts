import { Component, OnInit } from '@angular/core';
import { FechasFeriadas } from '../../interfaces/interfaces';
import { FeriadosService } from '../../services/feriados.service';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-feriadosap',
  templateUrl: './feriadosap.page.html',
  styleUrls: ['./feriadosap.page.scss'],
})
export class FeriadosapPage implements OnInit {

  feriados: FechasFeriadas[] = [];

  constructor( private feriadosService: FeriadosService,
    private menuController: MenuController) { 

  }

  ngOnInit() {
    this.feriadosService.getTopHeadLines().subscribe(resp => {
      console.log('feriados', resp);
      this.feriados.push(...resp.data);
    });
  }
  menuUsuario(){
    this.menuController.open('end');
  }
}
