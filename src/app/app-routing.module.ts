import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './welcome/components/navbar/navbar.component';
import { HomeComponent } from './welcome/pages/home/home.component';
import { PeticionesComponent } from './peticioneshttp/pages/peticiones/peticiones.component';

const routes: Routes = [
  
  {
    path: '',
    loadChildren: () =>import('./welcome/welcome.module').then(m=>m.WelcomeModule)
  },
  {
    path: 'peticiones',
    loadChildren: () =>import('./peticioneshttp/peticioneshttp.module').then(m=>m.PeticioneshttpModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
