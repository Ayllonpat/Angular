import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonsService } from '../../services/pokemons.service';
import { Result } from '../../interfaces/pokemons.interface';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent {
  listaPokemon: Result[] = [];
  pokemonSeleccionados: Result[] = [];
  buttonCount = 0;
  pokemonCount = 2;

  constructor(private service: PokemonsService, private router: Router) {}

  ngOnInit(): void {
    this.getPokemonList();
  }

  getPokemonList(): void {
    this.service.getPokemons().subscribe((res) => {
      this.listaPokemon = res.results;
    });
  }

  getImage(pokemon: Result): string {
    const id = pokemon.url.match(/\d+/g)?.[1];
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`;
  }

  capitalizeFirstLetter(string: string): string {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  onCheckClick(pokemon: Result): void {
    if (this.pokemonSeleccionados.includes(pokemon)) {

      this.pokemonSeleccionados = this.pokemonSeleccionados.filter(p => p !== pokemon);
      this.buttonCount--;
      
    } else if (this.pokemonSeleccionados.length < this.pokemonCount) {

      this.pokemonSeleccionados.push(pokemon);
      this.buttonCount++;
    }
  }

  confirmSelection(): void {
    if (this.pokemonSeleccionados.length === 2) {
      this.router.navigate(['/batalla'], { state: { pokemonSeleccionados: this.pokemonSeleccionados } });
    } else {
      alert('Selecciona exactamente 2 Pokémon antes de continuar.');
    }
  }

  deselectAll(): void {
    this.pokemonSeleccionados = [];
    this.buttonCount = 0;
  }
}
