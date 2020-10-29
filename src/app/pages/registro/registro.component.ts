import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from 'src/app/models/usuario.module';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: UsuarioModel;

  constructor() { }

  ngOnInit(): void {
    this.usuario = new UsuarioModel();
  }

  onSubmit( form: NgForm ): void {

    if ( form.invalid ) { return; }

    console.log('Formilario enviado');
    console.log(this.usuario);
    console.log(form);
  }

}
