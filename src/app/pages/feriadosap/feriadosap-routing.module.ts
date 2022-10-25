import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeriadosapPage } from './feriadosap.page';

const routes: Routes = [
  {
    path: '',
    component: FeriadosapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeriadosapPageRoutingModule {}
