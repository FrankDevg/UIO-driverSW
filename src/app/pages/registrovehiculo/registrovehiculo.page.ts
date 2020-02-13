import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioI } from 'src/app/models/usuario.interface';
import { UsuarioService } from 'src/app/services/usuario.service';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-registrovehiculo',
  templateUrl: './registrovehiculo.page.html',
  styleUrls: ['./registrovehiculo.page.scss'],
})
export class RegistrovehiculoPage implements OnInit {
  usuario: UsuarioI = {
    email: '',
    user: '',
    pass: '',
    marca:'',
    modelo:'',
    numplaca:'',
    vehiculo:''
  }
  usuarioId = null; 
  constructor(private router: Router,private usuarioService: UsuarioService,private loadCon: LoadingController) { }

  ngOnInit() {
    this.usuario=this.usuarioService.obtenerUsuarioS();
    console.log(this.usuario);
  }
 
  async pantallaHome(){
    const loading  = await this.loadCon.create({
    message: 'Saving Vehiculo...'
    });
    await loading.present();
   if(this.usuarioId){
     //update
   }else {
     // add new
     this.usuarioService.addUsuario(this.usuario).then(() =>{
      loading.dismiss();
      this.router.navigate(['/home/map']);
     });
   }
   console.log(this.usuario);
  }

}
