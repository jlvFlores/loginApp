import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioModel } from '../models/usuario.module';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'https://identitytoolkit.googleapis.com/v1/accounts:';
  private apikey = 'AIzaSyCOCwk5UHGnfAgWowoQ5crrYl1V07iwPtY';

  // sign up
  // https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]
  // login
  // https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

  constructor( private http: HttpClient ) { }

  logout(): void {}

  login( usuario: UsuarioModel ): void {

  }

  nuevoUsuario( usuario: UsuarioModel ): void {

  }
}
