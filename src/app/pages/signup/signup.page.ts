import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UsuarioI} from 'src/app/models/usuario.interface';
import { UsuarioService } from 'src/app/services/usuario.service';
import {NavController, LoadingController} from '@ionic/angular';
import{ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  usuario: UsuarioI = {
    email: '',
    user: '',
    pass: ''
  }
  usuarioId = null; 

  constructor( private router: Router, private nav:  NavController,
    private  route: ActivatedRoute,
    private usuarioService: UsuarioService, private loadCon: LoadingController) { }

  ngOnInit() {
    this.usuarioId =this.route.snapshot.params['id'];
    if(this.usuarioId){
      this.loadUsuario();
    }
  }
  vehiculos(){
   
    
  }
  async loadUsuario(){
    const loading  = await this.loadCon.create({
message: 'loading...'
    });
    await loading.present();
    this.usuarioService.getUsuarioc(this.usuarioId).subscribe( res => {
      loading.dismiss();
      this.usuario = res;

    });

  }
  async saveUsuario(){
    const loading  = await this.loadCon.create({
    message: 'Saving...'
    });
    await loading.present();
   if(this.usuarioId){
     //update
   }else {
     // add new
     this.usuarioService.addUsuario(this.usuario).then(() =>{
      loading.dismiss();
      this.router.navigate(['/registrovehiculo']);
     });
   }

  }

}
