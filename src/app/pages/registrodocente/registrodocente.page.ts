import { Component, OnInit, ViewChild } from '@angular/core';
import { ServicedocenteService, datosDocente } from '../../services/servicedocente.service';
import { Platform, ToastController, IonList, NavController} from '@ionic/angular';

import { AlertController } from '@ionic/angular';


import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,

} from '@angular/forms';


@Component({
  selector: 'app-registrodocente',
  templateUrl: './registrodocente.page.html',
  styleUrls: ['./registrodocente.page.scss'],
})
export class RegistrodocentePage implements OnInit {

  datos: datosDocente[] = [];
  newDatos: datosDocente = <datosDocente>{};
  @ViewChild('mylist')mylist: IonList;


  formularioRegistro: FormGroup;
  newUsuario: datosDocente = <datosDocente>{};

  constructor(private storageService:ServicedocenteService,
    private plt:Platform,private toastController:ToastController,
    private alertController:AlertController,
    private navController:NavController,
    private fb:FormBuilder) { 
     this.formularioRegistro = this.fb.group({
        'nombre': new FormControl("",Validators.required),
        'apellido': new FormControl("",Validators.required),
        'rut': new FormControl("",Validators.required),
        'email': new FormControl("",Validators.required),
        'contraseña': new FormControl("",Validators.required),
        'sede': new FormControl("",Validators.required),
    });
  }

  async crearUsuario(){
    var form = this.formularioRegistro.value;
    if(this.formularioRegistro.invalid){
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Debe completar todos los campos',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }

    this.newUsuario.nombres = form.nombre;
    this.newUsuario.apellidos = form.apellido;
    this.newUsuario.rut = form.rut;
    this.newUsuario.email = form.email;
    this.newUsuario.password = form.contraseña;
    this.newUsuario.sede = form.sede;
    this.storageService.addDatos(this.newUsuario).then(dato=>{
      this.newUsuario = <datosDocente>{};
      this.showToast('Datos Guardados');
    });
  }



    //get
    loadDatos() {
      this.storageService.getDatos().then(datos => {
        this.datos = datos;
      });
    }

    //create
    addDatos() {
      this.newDatos.modified = Date.now();
      this.newDatos.id = Date.now();
      this.storageService.addDatos(this.newDatos).then(datos => {
        this.newDatos = <datosDocente>{};
        this.showToast('Datos agregado');
        this.loadDatos();
      });
    }
    

    //update
    updateDatos(dato: datosDocente) {
      dato.nombres = `UPDATED: ${dato.nombres}`;
      dato.modified = Date.now();
      this.storageService.updateDatos(dato).then(datos => {
        this.showToast('Dato actualizado')
        this.mylist.closeSlidingItems();
        this.loadDatos();
      });
    }

    //delete
    deleteDatos(dato: datosDocente) {
      this.storageService.deleteDatos(dato.id).then(datos => {
        this.showToast('Dato eliminado');
        this.mylist.closeSlidingItems();
        this.loadDatos();
      });
    }

    async showToast(msg) {
      const toast = await this.toastController.create({
        message: msg,
        duration: 2000
      });
      toast.present();
    }
    


  ngOnInit() {
  }


}
