import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

export interface datosDocente {
  id: number;
  nombres: string;
  apellidos: string;
  rut: string;
  email: string;
  sede: string;
  password: string;
  modified: number;
}

const ITEMS_KEY = 'my-datos-docente';

@Injectable({
  providedIn: 'root'
})
export class ServicedocenteService {

  private _storage : Storage;

  constructor(private storage: Storage) {
    this.init();
   }

   //definimos en un método la creación del almacenamiento
    async init() { 
      const storage = await this.storage.create();
      this._storage = storage;
    }

    //crear un nuevo docente en el storage
    async addDatos(dato: datosDocente): Promise<any> {
      return this.storage.get(ITEMS_KEY).then((datos : datosDocente[]) => {
          if (datos) {
            datos.push(dato);
            return this.storage.set(ITEMS_KEY, datos);
          } else {
            return this.storage.set(ITEMS_KEY, [dato]);
          }  
      })
    }

    //leer
    getDatos(): Promise<datosDocente[]> {
      return this.storage.get(ITEMS_KEY);
    }


    //actualizar informacion de un docente
    async updateDatos(dato: datosDocente): Promise<any> {
      return this.storage.get(ITEMS_KEY).then((datos : datosDocente[]) => {
          if (!datos || datos.length === 0) {
            return null;
          }
          let newDatos: datosDocente[] = [];
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


    //eliminar un docente
    async deleteDatos(id: number): Promise<datosDocente> {
      return this.storage.get(ITEMS_KEY).then((datos : datosDocente[]) => {
          if (!datos || datos.length === 0) {
            return null;
          }
          let toKeep: datosDocente[] = [];
          for (let i of datos) {
            if (i.id !== id) {
              toKeep.push(i);
            }
          }
          return this.storage.set(ITEMS_KEY, toKeep);
        });
    }



    
}
