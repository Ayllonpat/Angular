import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonsComponent } from './components/pokemons/pokemons.component';
import { BatallaPokemonsComponent } from './components/batalla-pokemons/batalla-pokemons.component';

const routes: Routes = [
  { path: 'pokemons', component: PokemonsComponent },
  { path: 'batalla', component: BatallaPokemonsComponent},
  { path: '', redirectTo: '/pokemons', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
