import { Component } from '@angular/core';

@Component({
  selector: 'app-ejemplodirectivas',
  templateUrl: './ejemplodirectivas.component.html',
  styleUrls: ['./ejemplodirectivas.component.css']
})
export class EjemplodirectivasComponent {
    flag=false;

    lado=4;

    ngif=5

    htmlString: string ='Este es un valor inyectado desde la directiva innerHtml'
    cambiarEstado(){
      this.flag= !this.flag;
    }


    Hero = [
      { id: 11, name: 'Dr Nice' },
      { id: 12, name: 'Marco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];
}
