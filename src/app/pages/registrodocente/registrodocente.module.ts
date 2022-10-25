import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrodocentePageRoutingModule } from './registrodocente-routing.module';

import { RegistrodocentePage } from './registrodocente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RegistrodocentePageRoutingModule
  ],
  declarations: [RegistrodocentePage]
})
export class RegistrodocentePageModule {}
