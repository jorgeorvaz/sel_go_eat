import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NavController, ToastController } from '@ionic/angular';
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

  constructor(private navCtrl: NavController, private authService: AuthService, private toastCtrl: ToastController) { }

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

  async perfil(){
    console.log(this.correo);
    var user = firebase.auth().currentUser;
    user.updateEmail(this.correo).then(async res => {
      let toast = await this.toastCtrl.create({
        duration: 3000,
        message: 'Su correo se cambio con éxito'
      });
      toast.present();
      user.sendEmailVerification().then(function() {
        alert('verifica tu email');
      }).catch(function(error) {
        console.log(error);
      });
    }).catch(function(error){
      alert(error.message);
    });
  }

  async password(){
    console.log(this.contrasena);
    var user = firebase.auth().currentUser;
    user.updatePassword(this.contrasena).then(async res => {
      let toast = await this.toastCtrl.create({
        duration: 3000,
        message: 'Su contraseña se ha cambiado'
      });
      toast.present();
    }).catch(function(error){
      console.log(error);
    });
  }

  

}
