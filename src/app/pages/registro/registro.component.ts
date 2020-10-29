import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from 'src/app/models/usuario.module';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: UsuarioModel;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.usuario = new UsuarioModel();
  }

  onSubmit( form: NgForm ): void {

    if ( form.invalid ) { return; }

    this.auth.nuevoUsuario( this.usuario )
    .subscribe( resp => {

      console.log(resp);

    }, (err) => {
      console.log(err.error.error.message);
    });
  }

}
