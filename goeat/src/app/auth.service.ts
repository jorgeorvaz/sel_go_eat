import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from '@angular/fire/auth';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afDB: AngularFireDatabase, private afAuth: AngularFireAuth) { }

  public crear_usuario(usuario){
    return new Promise<any>((resolve, reject) => {

      this.afAuth.auth.createUserWithEmailAndPassword(usuario.email, usuario.password)
        .then(
          res => resolve(res),
          err => reject(err))
    })
  }

  public iniciar_usuario(usuario){
    return new Promise<any>((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(usuario.email, usuario.password)
        .then(
          res => resolve(res),
          err => reject(err))
    })
  }
 
}
