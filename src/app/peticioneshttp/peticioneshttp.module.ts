import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PeticioneshttpRoutingModule } from './peticioneshttp-routing.module';
import { PeticionesComponent } from './pages/peticiones/peticiones.component';
import { WelcomeModule } from '../welcome/welcome.module';
import { FormsModule } from '@angular/forms';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { ListComponent } from './components/list/list.component';


@NgModule({
  declarations: [
    PeticionesComponent,
    SearchbarComponent,
    ListComponent,
  ],
  imports: [
    // BrowserModule,
    CommonModule,
    PeticioneshttpRoutingModule,
    WelcomeModule,
    FormsModule
  ]
})
export class PeticioneshttpModule { }
