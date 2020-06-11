import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { Usuario } from './registro/usuario.model';
import { isNullOrUndefined } from "util";
import { Observable } from 'rxjs';

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
    var rest_id = restaurante.id;
    return this.afDB.database.ref("probando/"+rest_id).once('value').then(function(snapshot) {
      var ocup = snapshot.val() && snapshot.val().ocupacion;
      console.log(ocup);
      if (ocup != null){
        ocup += 1;
        const rest_updt ={
          ocupacion: ocup
        };
        ref.child(restaurante.id).update(rest_updt);
      }
      else{
        const rest_updt ={
          ocupacion: restaurante.ocupacion  
        };
        ref.child(restaurante.id).update(rest_updt);
      }
    });
  }

  public borrar_ocupacion(restaurante){
    var ref = this.afDB.database.ref("probando");
    var rest_id = restaurante.id;
    return this.afDB.database.ref("probando/"+rest_id).once('value').then(function(snapshot) {
      var ocup = snapshot.val() && snapshot.val().ocupacion;
      console.log(ocup);
      if (ocup != null){
        ocup -= 1;
        const rest_updt ={
          ocupacion: ocup
        };
        ref.child(restaurante.id).update(rest_updt);
      }
      else{
        const rest_updt ={
          ocupacion: restaurante.ocupacion  
        };
        ref.child(restaurante.id).update(rest_updt);
      }
    });

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
