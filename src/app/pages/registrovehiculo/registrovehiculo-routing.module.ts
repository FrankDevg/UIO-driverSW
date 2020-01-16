import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrovehiculoPage } from './registrovehiculo.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrovehiculoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrovehiculoPageRoutingModule {}
