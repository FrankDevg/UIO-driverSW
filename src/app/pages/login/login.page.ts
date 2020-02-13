import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import {UsuarioI} from 'src/app/models/usuario.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user:string;
  pass:string;
  usuarios: UsuarioI[];
 // @ViewChild(MapPage) MapPage: MapPage;

  constructor( private router: Router, private usuarioServicio: UsuarioService) { }

  ngOnInit() {
    this.user="";
    this.pass="";
    this.usuarioServicio.getUsuarios().subscribe( res=>{
     
      this.usuarios = res;
    });
  }
  login(){
    this.usuarios.map(aux=>{
      if(this.user === aux.user && this.pass === aux.pass){
        this.router.navigate(['/home/map']);
        this.usuarioServicio.colocarUsuarioS(aux);
      }else {
        console.log('else');
      }
    });
    
    
    
    
    
  }

}
