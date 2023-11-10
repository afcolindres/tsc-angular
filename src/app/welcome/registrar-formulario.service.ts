import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrarFormularioService {

  constructor( private http: HttpClient) { }

  registrarContacto(nombre: string, email: string){
    return this.http.post('urlServicio',{
      params:{
        nombre: nombre,
        email: email
      }
    });
  }
}
