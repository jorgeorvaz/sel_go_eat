import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { Usuario } from './registro/usuario.model';
import { isNullOrUndefined } from "util";
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afDB: AngularFireDatabase, private afAuth: AngularFireAuth) { }

  public insertar_mensaje(mensaje){
    console.log(mensaje);
    this.afDB.database.ref('mensajes').push(mensaje);
  }

  public insertar_restaurante(restaurante){
    var ref = this.afDB.database.ref("probando");
    let local = ref.orderByChild("id").equalTo(restaurante.id);
    console.log(local);
    if(local != null){
      console.log("aqui no se inserta marica");
    }
    else{
      this.afDB.database.ref('probando').push(restaurante);
    }
    
  }

  public crear_usuario(usuario) {
    return new Promise<any>((resolve, reject) => {

      this.afAuth.auth.createUserWithEmailAndPassword(usuario.email, usuario.password)
        .then(
          res => resolve(res),
          err => reject(err))
    })
  }

  public loginUser(usuario) {
    return new Promise<any>((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(usuario.email, usuario.password)
        .then(
          res => resolve(),
          err => reject(alert('Ese usuario no existe')))

    })
  }

  logoutUser() {
    return new Promise((resolve, reject) => {
      if (this.afAuth.auth.currentUser) {
        this.afAuth.auth.signOut()
          .then(() => {
            console.log("LOG Out");
            resolve();
          }).catch((error) => {
            reject();
          });
      }
    })
  }

  userDetails() {
    return this.afAuth.user
  }

}
