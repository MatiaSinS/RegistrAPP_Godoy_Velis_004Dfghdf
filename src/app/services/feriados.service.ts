import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RespuestaTopHeadlines } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class FeriadosService {

  constructor(private Http:HttpClient) { }

  getTopHeadLines(){
    return this.Http.get<RespuestaTopHeadlines>('https://api.victorsanmartin.com/feriados/en.json')
  }
}
