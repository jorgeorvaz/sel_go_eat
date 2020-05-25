import { Component, OnInit } from '@angular/core';
import { Usuario } from '../registro/usuario.model';
import { AuthService } from '../auth.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router } from "@angular/router";
import { ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  validations_form: FormGroup;
  errorMessage: string = '';
  usuario: Usuario = new Usuario();
  checked: boolean = false;
  ionicForm: FormGroup;
  isSubmitted = false;

  constructor(private authService: AuthService, public formBuilder: FormBuilder, public router: Router) { }

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password: ['', Validators.required]
    })
  }

  get errorControl() {
    return this.ionicForm.controls;
  }

  iniciar() {
    this.isSubmitted = true;
    if (!this.ionicForm.valid) {
      console.log('Inserta los datos bien!')
      return false;
    } else {
      this.authService.loginUser(this.usuario)
        .then(res => {
          console.log(res);
          this.errorMessage = "";
          window.location.href = '/home';
        }, err => {
          this.errorMessage = err.message;
        })
    }
  }
}
