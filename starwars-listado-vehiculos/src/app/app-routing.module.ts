import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehiculoListComponent } from './components/vehiculos/vehiculos.component';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { PageNotFoundComponent } from './components/page.not.found/page.not.found.component';

const routes: Routes = [
  {path: 'vehiculos', component: VehiculoListComponent},
  {path: 'personajes', component: PersonajesComponent},
  {path: '', redirectTo: '/vehiculos', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
