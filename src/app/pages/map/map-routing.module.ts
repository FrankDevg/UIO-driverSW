import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MapPage } from './map.page';
import { Geolocation } from '@ionic-native/geolocation/ngx';

const routes: Routes = [
  {
    path: '',
    component: MapPage
  }
];

@NgModule({
  imports: [
    CommonModule, 
    FormsModule, 
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MapPage],
  providers: [Geolocation],
  exports: [RouterModule],
})
export class MapPageRoutingModule {}
