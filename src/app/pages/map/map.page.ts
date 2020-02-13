import { Component, OnInit, ViewChild } from '@angular/core';
import {Platform} from '@ionic/angular';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import { UsuarioService } from 'src/app/services/usuario.service';
import {UsuarioI} from 'src/app/models/usuario.interface';

declare var google;
@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {
  usuario?;
  map:any;
  marker:any;
  latitude:any="";
  longitude:any="";
  timestamp:any="";
  user:any="";
  constructor(public platform: Platform, public geolocation:Geolocation, private usuarioService: UsuarioService) {
    this.platform.ready().then(()=>{
      var mapOptions={
          
      center:{lat:-0.210399,lng:-78.488019},
      zoom: 18
      }
      this.map = new google.maps.Map(document.getElementById("map"),mapOptions);
    })
    
  
   }
   GetLocation() {
    var ref = this; 
    let watch = this.geolocation.watchPosition();
    watch.subscribe((position)=>{

      var gps = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
      if(ref.marker==null){
        ref.marker = new google.maps.Marker({
          position: gps,
          map:ref.map,
          tittle:'my position'
        })
      }else{
        ref.marker.setPosition(gps);
      }
      ref.map.panTo(gps);
      ref.latitude = position.coords.latitude.toString();
      ref.longitude = position.coords.longitude.toString();
      ref.timestamp = (new Date(position.timestamp)).toString();
      this.GetLocation();
      
    } )
  }
  

  ngOnInit() {
    this.user = this.usuarioService.obtenerUsuarioS().user;
    this.usuario = this.usuarioService.obtenerUsuarioS();
    console.log(this.usuario);
  }
  
}
