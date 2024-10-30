import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Result } from '../../interfaces/pokemons.interface';

@Component({
  selector: 'app-batalla-pokemons',
  templateUrl: './batalla-pokemons.component.html',
  styleUrls: ['./batalla-pokemons.component.css'],
})
export class BatallaPokemonsComponent implements OnInit {
  pokemonSeleccionados: Result[] = [];
  pokemonTurn = 1;
  lifePokemon1 = 100;
  lifePokemon2 = 100;
  battleLog: string[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Obtener el estado pasado desde la navegación
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state && navigation.extras.state['pokemonSeleccionados']) {
      this.pokemonSeleccionados = navigation.extras.state['pokemonSeleccionados'];

      // Inicializar salud de los Pokémon
      this.pokemonSeleccionados.forEach(pokemon => {
        pokemon.health = pokemon.health ?? Math.floor(Math.random() * 100) + 1;
      });
    } else {
      alert('No se han seleccionado Pokémon. Regresando a la selección.');
      this.router.navigate(['/pokemons']);
    }
  }

  getImage(pokemon: Result): string {
    const id = pokemon.url.match(/\d+/g)?.[1];
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`;
  }

  capitalizeFirstLetter(name: string): string {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  applyDamage(damage: number): void {
    if (this.pokemonTurn === 1) {
      this.lifePokemon2 = Math.max(this.lifePokemon2 - damage, 0);
      this.battleLog.push(`${this.capitalizeFirstLetter(this.pokemonSeleccionados[0].name)} ataca y hace ${damage} de daño`);
      this.pokemonTurn = 2;
    } else {
      this.lifePokemon1 = Math.max(this.lifePokemon1 - damage, 0);
      this.battleLog.push(`${this.capitalizeFirstLetter(this.pokemonSeleccionados[1].name)} ataca y hace ${damage} de daño`);
      this.pokemonTurn = 1;
    }
  }
}
