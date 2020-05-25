import { Component, OnInit } from '@angular/core';
import { Usuario } from '../registro/usuario.model';
import { AuthService } from '../auth.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router } from "@angular/router";
import { ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { Mensaje } from './contacto.model';


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

  constructor(private authService: AuthService, public formBuilder: FormBuilder) { }

  mensaje: Mensaje = new Mensaje;

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      nombre : ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      mensaje: ['', Validators.required]
    })


  }

  get errorControl() {
    return this.ionicForm.controls;
  }

  enviar_mensaje(){
    console.log(this.mensaje.mensaje)
  }


}
