import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario.model';
import { AuthService } from '../auth.service';


import { Router } from  "@angular/router";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  usuario: Usuario=new Usuario();
  checked : boolean = false;

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  addValue(e): void {
    var isChecked = e.currentTarget.checked;
  }

  registrar(){
    console.log(this.usuario);
    this.authService.crear_usuario(this.usuario);

  }
}
