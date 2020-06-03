import { Component, OnInit } from '@angular/core';
import { Usuario } from '../registro/usuario.model';
import { AuthService } from '../auth.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router } from "@angular/router";
import { ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { Mensaje } from './contacto.model';
import 'firebase/auth';

declare const toast;

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
})
export class ContactoPage implements OnInit {
  validations_form: FormGroup;
  errorMessage: string = '';
  contacto: Mensaje = new Mensaje();
  ionicForm: FormGroup;
  isSubmitted = false;
  usuario: Usuario = new Usuario();
  userEmail: string;
 
  

  constructor(private authService: AuthService, public formBuilder: FormBuilder, private navCtrl: NavController, public toastController: ToastController) { }

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      nombre : ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      mensaje: ['', Validators.required]

    })
    this.authService.userDetails().subscribe(res => {
      if (res !== null) {
        this.userEmail = res.email;
        console.log(this.userEmail);
      } else {
        this.navCtrl.navigateBack('');
      }
    }, err => {
      console.log('err', err);
    });

  }

  get errorControl() {
    return this.ionicForm.controls;
  }
  
  async mensajeToast() {
    const toast = await this.toastController.create({
      message: 'Tu mensaje ha sido enviado con éxito',
      duration: 2000
    });
    toast.present();
  }

  crear_mensaje(){
    this.authService.insertar_mensaje(this.contacto);
  }
   
  }

  



