import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { EjemplodirectivasComponent } from './components/ejemplodirectivas/ejemplodirectivas.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent,
    EjemplodirectivasComponent,
  ],
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    FormsModule
  ],
  exports:[NavbarComponent]
})
export class WelcomeModule { }
