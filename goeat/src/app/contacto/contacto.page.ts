import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Mensaje } from './contacto.model';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
})
export class ContactoPage implements OnInit {
  contacto: Mensaje = new Mensaje();
  ionicForm: FormGroup;
  isSubmitted = false;

  constructor(private authService: AuthService, public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      nombre : ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]]
    })


  }

  get errorControl() {
    return this.ionicForm.controls;
  }

  enviar_mensaje(){
    this.isSubmitted = true;
    if (!this.ionicForm.valid) {
      console.log('Inserta los datos bien!')
      return false;
    } else {
      console.log(this.ionicForm.value)
      console.log(this.contacto);
      this.authService.iniciar_usuario(this.contacto);
      
    }


  }

}
