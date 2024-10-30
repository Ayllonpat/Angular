import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonsComponent } from './components/pokemons/pokemons.component'; // Verifica la ruta
import { BatallaPokemonsComponent } from './components/batalla-pokemons/batalla-pokemons.component'; // Verifica la ruta

const routes: Routes = [
  { path: '', redirectTo: '/pokemons', pathMatch: 'full' },
  { path: 'pokemons', component: PokemonsComponent },
  { path: 'batalla', component: BatallaPokemonsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
