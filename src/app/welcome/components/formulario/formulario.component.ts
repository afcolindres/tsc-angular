import { Component } from '@angular/core';
import { RegistrarFormularioService } from '../../registrar-formulario.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  constructor (private registrarContacto: RegistrarFormularioService){

  }
  email: string='';
  nombre:string='';

  mensajeRespuesta: string='';

  onSubmit(){
    console.log(this.email, this.nombre);
    // this.registrarContacto.registrarContacto(this.email,  this.nombre ).subscribe((response :any ) => {
    //   console.log(response);
    // this.mensajeRespuesta=response.message;
    // })

    this.mensajeRespuesta='Se creo el contacto';

  }
}






