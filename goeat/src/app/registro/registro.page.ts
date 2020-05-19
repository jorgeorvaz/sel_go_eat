import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario.model';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  firebaseService: any;
  toastCtrl: any;
  usuario: Usuario=new Usuario();

  checked : boolean = false;
  constructor() { }

  ngOnInit() {
  }

  registrar(){
    console.log(this.usuario);
    this.firebaseService.add_usuario(this.usuario)
    .then( res => {
      console.log(res);
      let toast = this.toastCtrl.create({
        message: 'User was created successfully',
        duration: 3000
      });
      toast.present();
      this.resetFields();
    }, err => {
      console.log(err)
    })
  }
  resetFields() {
    throw new Error("Method not implemented.");
  }

  addValue(e): void {
    var isChecked = e.currentTarget.checked;
  }
}
