import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import {Platform} from '@ionic/angular';
import {Geolocation} from '@ionic-native/geolocation/ngx';
declare var google;
@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit, AfterViewInit {

  map:any;
  marker:any;
  latitude:any;
  longitude:any;
  timestamp:any="";
  
  @ViewChild('mapElement',{static: false}) mapNativeElement: ElementRef;

  constructor(private geolocation:Geolocation) {  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;
      const map = new google.maps.Map(this.mapNativeElement.nativeElement, {
        center: {lat:-0.210399,lng:-78.488019},
        zoom: 18
        });
      const infoWindows = new google.map.infoWindows;
      const pos = {
        lat: this.latitude,
        lng: this.longitude
      };

      infoWindows.setPosition(pos);
      infoWindows.setContent('Buscando ubicación');
      infoWindows.open(map);
      map.setCenter(pos);
    }).catch( (error) => {
      console.log('Error al obtener la ubicación')
    });
      
  }
}
  

