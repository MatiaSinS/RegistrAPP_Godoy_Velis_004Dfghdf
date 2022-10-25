import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IngresadoGuard } from './ingresado.guard';
import { NoIngresadoGuard } from './no-ingresado.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'sugerencia',
    loadChildren: () => import('./pages/sugerencia/sugerencia.module').then( m => m.SugerenciaPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'cuenta',
    loadChildren: () => import('./pages/cuenta/cuenta.module').then( m => m.CuentaPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'crearqr',
    loadChildren: () => import('./pages/crearqr/crearqr.module').then( m => m.CrearqrPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'escanearqr',
    loadChildren: () => import('./pages/escanearqr/escanearqr.module').then( m => m.EscanearqrPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'mostrarqr',
    loadChildren: () => import('./pages/mostrarqr/mostrarqr.module').then( m => m.MostrarqrPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'registrodocente',
    loadChildren: () => import('./pages/registrodocente/registrodocente.module').then( m => m.RegistrodocentePageModule),
    canActivate: [NoIngresadoGuard]
  },

  {
    path: 'registro-alumno',
    loadChildren: () => import('./pages/registro-alumno/registro-alumno.module').then( m => m.RegistroAlumnoPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'logindocente',
    loadChildren: () => import('./pages/logindocente/logindocente.module').then( m => m.LogindocentePageModule),
    canActivate: [NoIngresadoGuard] 
  },
  {
    path: 'feriadosap',
    loadChildren: () => import('./pages/feriadosap/feriadosap.module').then( m => m.FeriadosapPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'cerrar-sesion',
    loadChildren: () => import('./pages/cerrar-sesion/cerrar-sesion.module').then( m => m.CerrarSesionPageModule),
    canActivate: [IngresadoGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
