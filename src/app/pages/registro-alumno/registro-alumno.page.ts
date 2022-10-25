import { Component, OnInit,ViewChild } from '@angular/core';
import { ServicealumnoService,datosAlumno } from '../../services/servicealumno.service';
import {Platform, ToastController, IonList} from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';


@Component({
  selector: 'app-registro-alumno',
  templateUrl: './registro-alumno.page.html',
  styleUrls: ['./registro-alumno.page.scss'],
})
export class RegistroAlumnoPage implements OnInit {

  datos: datosAlumno[] = [];
  newDato: datosAlumno = <datosAlumno>{};
  @ViewChild('mylist')myList:IonList;


  constructor(private storageService:ServicealumnoService,
              private plt:Platform,private toastController:ToastController) {
                  this.plt.ready().then(()=>{
                    this.loadDatos();
                  });
               }

  ngOnInit() {
  }


  loadDatos(){
    this.storageService.getDatos().then(datos=>{
      this.datos = datos;
    });
  }

  addDatos(){
    this.newDato.modified = Date.now();
    this.newDato.id = Date.now();
    this.storageService.addDatos(this.newDato).then(dato=>{
      this.newDato = <datosAlumno>{};
      this.showToast('Datos guardados');
      this.loadDatos();
    });
  }

  deleteDatos(dato:datosAlumno){
    this.storageService.deleteDatos(dato.id).then(item=>{
      this.showToast('Datos eliminados');
      this.myList.closeSlidingItems();
      this.loadDatos();
    });
  }

  updateDatos(dato:datosAlumno){
    dato.nombres = `UPDATED: ${dato.nombres}`;
    dato.modified = Date.now();
    this.storageService.updateDatos(dato).then(item=>{
      this.showToast('Datos actualizados');
      this.myList.closeSlidingItems();
      this.loadDatos();
    });
  }

  async showToast(msg){
    const toast = await this.toastController.create({
      message:msg,
      duration:2000
    });
    toast.present();
  }

}
