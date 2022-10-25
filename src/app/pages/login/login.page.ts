import { Component, OnInit } from '@angular/core';
import {MenuController} from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { ServicealumnoService,datosAlumno } from '../../services/servicealumno.service';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  alumnos:datosAlumno[] = [];
  formularioLogin : FormGroup;

  constructor(private menuController: MenuController,
              private alertController:AlertController,
              private navController:NavController,
              private registroService:ServicealumnoService,
              private fb:FormBuilder) {
                  this.formularioLogin = this.fb.group({
                    'correo': new FormControl('',Validators.required),
                    'password': new FormControl('',Validators.required),
               });
              }

  ngOnInit() {
  }



  menuUsuario(){
    this.menuController.open('end');
  }

 

  onSubmit(){
  }

  async Ingresar(){
    var f = this.formularioLogin.value;
    var a = 0;

    this.registroService.getDatos().then(datos=>{
      this.alumnos = datos;
      if(datos.length==0){
        return null;
      }
      for(let obj of this.alumnos){
        if(obj.email==f.correo && obj.password==f.password){
          a=1;
          console.log("Ingresado");
          localStorage.setItem('ingresado-alumno',"true");
          localStorage.setItem('nombre',obj.nombres);
          localStorage.setItem('apellido',obj.apellidos);
          localStorage.setItem('rut',obj.rut);
          localStorage.setItem('correo',obj.email);
          localStorage.setItem('sede',obj.sede);
          this.navController.navigateRoot('escanearqr');
        }
      }
      console.log(a);
      if(a==0){
        this.alertMsg();
      }
    });
  }

    async alertMsg(){
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Usuario o contraseña incorrectos',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }


}
