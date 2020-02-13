import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {
fecha?;
fechaS?;
usuario?;
placa?;
circula?;
auxFecha?;
  constructor(private usuarioService:UsuarioService) { }

  ngOnInit() {
    this.fecha= new Date();
    this.fechaS= String(this.fecha).substring(0,25);
    this.auxFecha = String(this.fecha).substring(0,3);
    
    
    this.usuario = this.usuarioService.obtenerUsuarioS();
    this.placa = String(this.usuario.numplaca).substring(6,7);
    console.log(this.placa);
    console.log(this.auxFecha);
    
    if( (this.placa === '1' || this.placa ===  '2') && this.auxFecha === 'Mon'){
      this.circula = 'No puede circular en UIO';
    }else if( (this.placa === '3' || this.placa ===  '4') && this.auxFecha === 'Tue'){
      this.circula = 'No puede circular en UIO';
    }else if( (this.placa === '5' || this.placa ===  '6') && this.auxFecha === 'Wed'){
      this.circula = 'No puede circular en UIO';
    }else if( (this.placa === '7' || this.placa ===  '8') && this.auxFecha === 'Thu'){
      this.circula = 'No puede circular en UIO';
    }else if( (this.placa === '9' || this.placa ===  '0') && this.auxFecha === 'Fri'){
      this.circula = 'No puede circular en UIO';
    }else{
      this.circula = 'Puede circular en UIO';
    }

  }

}
