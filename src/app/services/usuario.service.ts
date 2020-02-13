import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import{Observable}  from 'rxjs';
import {map} from 'rxjs/operators';
import {UsuarioI} from '../models/usuario.interface';



@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private usuarioC: AngularFirestoreCollection<UsuarioI>;
  private usuarios: Observable<UsuarioI[]>;
  private usuarioSeleccionado: UsuarioI;


  constructor(db: AngularFirestore) {
    this.usuarioC = db.collection<UsuarioI>('usuarios');
    this.usuarios = this.usuarioC.snapshotChanges().pipe(map(
      actions => {
        return actions.map( a=>{
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return{id, ...data};

        })
      }
    ));
   }
   colocarUsuarioS(usuarioL){
     this.usuarioSeleccionado = usuarioL;

   }
   obtenerUsuarioS(){
     return this.usuarioSeleccionado;
   }
   getUsuarios(){
     return this.usuarios;
   }
   getUsuarioc(user:string){
     return this.usuarioC.doc<UsuarioI>(user).valueChanges();
   }
   addUsuario(usuario: UsuarioI){
    return this.usuarioC.add(usuario);
   }

}
