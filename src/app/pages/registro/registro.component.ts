import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UsuarioModel } from 'src/app/models/usuario.module';
import { AuthService } from 'src/app/services/auth.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: UsuarioModel;
  recordarme = false;

  constructor(private auth: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.usuario = new UsuarioModel();
  }

  onSubmit( form: NgForm ): void {

    if ( form.invalid ) { return; }

    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'espere for favor...'
    });
    Swal.showLoading();

    this.auth.nuevoUsuario( this.usuario )
    .subscribe( resp => {

      console.log(resp);
      Swal.close();

      if ( this.recordarme ){
        localStorage.setItem('email', this.usuario.email);
      }

      this.router.navigateByUrl('/home');

    }, (err) => {
      console.log(err.error.error.message);
      Swal.fire({
        icon: 'error',
        title: 'error al autenticar',
        text: err.error.error.message
      });

    });
  }

}
