import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { EjemplodirectivasComponent } from './components/ejemplodirectivas/ejemplodirectivas.component';
import { FormsModule } from '@angular/forms';
import { FormularioComponent } from './components/formulario/formulario.component';
import { AlertComponent } from './components/alert/alert.component';

@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent,
    EjemplodirectivasComponent,
    FormularioComponent,
    AlertComponent,
  ],
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    FormsModule
  ],
  exports:[NavbarComponent]
})
export class WelcomeModule { }
