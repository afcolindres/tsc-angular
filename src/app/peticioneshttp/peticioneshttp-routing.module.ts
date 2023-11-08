import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeticionesComponent } from './pages/peticiones/peticiones.component';

const routes: Routes = [
  {path: '', component: PeticionesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeticioneshttpRoutingModule { }
