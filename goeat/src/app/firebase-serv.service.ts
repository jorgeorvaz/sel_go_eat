import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import { Usuario } from './registro/usuario.model';



@Injectable({
  providedIn: 'root'
})
export class FirebaseServService {

  constructor(
    public afs: AngularFirestore,
  ){}

  add_usuario(usuario){
    return new Promise<any>((resolve, reject) => {
      this.afs.collection('./users').add({
        email: usuario.email,
        password: usuario.password
      })
      .then((res) => {
        resolve(res)
      },err => reject(err))
    })
  }
}
