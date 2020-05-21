import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afDB: AngularFirestore) { }

  public crear_usuario(value){
    console.log(value);
    return this.afDB.collection('users').add({
      email: value.email,
      password: value.password
    });
  }
 
}
