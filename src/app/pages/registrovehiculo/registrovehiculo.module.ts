import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrovehiculoPageRoutingModule } from './registrovehiculo-routing.module';

import { RegistrovehiculoPage } from './registrovehiculo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrovehiculoPageRoutingModule
  ],
  declarations: [RegistrovehiculoPage]
})
export class RegistrovehiculoPageModule {}
