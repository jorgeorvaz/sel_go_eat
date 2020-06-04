import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NavController } from '@ionic/angular';
import * as firebase from 'firebase/app';
import 'firebase/auth';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  userEmail: string;
  correo: string;
  contrasena: string;

  constructor(private navCtrl: NavController, private authService: AuthService) { }

  ngOnInit() {
    
    this.authService.userDetails().subscribe(res => {
      console.log('res',res.email);
      if (res !== null) {
        this.userEmail = res.email;
      } else {
        this.navCtrl.navigateBack('');
      }
    }, err => {
      console.log('err', err);
    });
  }

  perfil(){
    console.log(this.correo);
    var user = firebase.auth().currentUser;
    user.updateEmail(this.correo).then(function(){
      alert('email cambiado');
    }).catch(function(error){
      console.log(error);
    });
  }

  password(){
    console.log(this.contrasena);
    var user = firebase.auth().currentUser;
    user.updatePassword(this.contrasena).then(function(){
      alert('password cambiada');
    }).catch(function(error){
      console.log(error);
    });
  }

  logout() {
    this.authService.logoutUser()
      .then(res => {
        console.log(res);
        this.navCtrl.navigateBack('');
      })
      .catch(error => {
        console.log(error);
      })
  }

}
