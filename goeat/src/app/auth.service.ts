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

  userDetails() {
    return this.afAuth.user
  }

}
