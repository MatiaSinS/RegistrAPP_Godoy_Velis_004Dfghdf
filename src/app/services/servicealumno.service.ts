import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

export interface datosAlumno {
  id: number;
  nombres: string;
  apellidos: string;
  rut: string;
  email: string;
  sede: string;
  password: string;
  modified: number;
}
   
  const ITEMS_KEY = 'my-datos-alumno';

@Injectable({
  providedIn: 'root'
})
export class ServicealumnoService {

  private _storage : Storage;

  constructor(private storage: Storage) {
    this.init();
   }

   //definimos en un método la creación del almacenamiento
   async init() {
    const storage = await this.storage.create();
    this._storage = storage; 
    }

    //crear un nuevo alumno en el storage
   async addDatos(dato: datosAlumno): Promise<any> {
    return this.storage.get(ITEMS_KEY).then((datos : datosAlumno[]) => {
        if (datos) {
          datos.push(dato);
          return this.storage.set(ITEMS_KEY, datos);
        } else {
          return this.storage.set(ITEMS_KEY, [dato]);
        }  

      })
  }

  //leer
  getDatos(): Promise<datosAlumno[]> {
    return this.storage.get(ITEMS_KEY);
  }

  //actualizar informacion de un alumno
  async updateDatos(dato: datosAlumno): Promise<any> {
    return this.storage.get(ITEMS_KEY).then((datos : datosAlumno[]) => {
        if (!datos || datos.length === 0) {
          return null;
        }
        let newDatos: datosAlumno[] = [];
        for (let i of datos) {
          if (i.id === dato.id) {
            newDatos.push(dato);
          } else {
            newDatos.push(i);
          }
        }
        return this.storage.set(ITEMS_KEY, newDatos);
    });
  }

  //eliminar un alumno
  async deleteDatos(id: number): Promise<datosAlumno> {
    return this.storage.get(ITEMS_KEY).then((datos : datosAlumno[]) => {
        if (!datos || datos.length === 0) {
          return null;
        }
        let toKeep: datosAlumno[] = [];
        for (let i of datos) {
          if (i.id !== id) {
            toKeep.push(i);
          }
        }
        return this.storage.set(ITEMS_KEY, toKeep);
    });
  }



  
}
