import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from 'src/app/models/usuario.module';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: UsuarioModel;

  constructor() { }

  ngOnInit() {
    this.usuario = new UsuarioModel();

    this.usuario.email = 'jluisvazquez.jv@gmail.com';
  }

  onSubmit() {
    console.log('Formilario enviado');
    console.log(this.usuario);
  }

}
