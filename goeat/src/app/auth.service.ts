import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afDB: AngularFireDatabase) { }

  public crear_usuario(usuario){
    console.log(usuario);
    this.afDB.database.ref().push(usuario);
  }
 
}
