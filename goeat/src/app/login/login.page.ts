import { Component, OnInit } from '@angular/core';
import { Usuario } from '../registro/usuario.model';
import { AuthService } from '../auth.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router } from "@angular/router";
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario: Usuario=new Usuario();
  checked : boolean = false;
  ionicForm: FormGroup;
  isSubmitted = false;

  constructor(private authService: AuthService, public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password: ['', Validators.required]
    })
  }

  get errorControl() {
    return this.ionicForm.controls;
  }

  iniciar(){
    this.isSubmitted = true;
    if (!this.ionicForm.valid) {
      console.log('Inserta los datos bien!')
      return false;
    } else {
      console.log(this.ionicForm.value)
      console.log(this.usuario);
      this.authService.iniciar_usuario(this.usuario);
      
    }
  }

}
