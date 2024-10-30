import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Result } from '../../interfaces/pokemons.interface';
import { PokemonsService } from '../../services/pokemons.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {
  listaPokemon: Result[] = [];
  pokemonSeleccionados: Result[] = [];
  pokemonCount = 2; // Limitar a 2 Pokémon

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
    } else if (this.pokemonSeleccionados.length < this.pokemonCount) {
      this.pokemonSeleccionados.push(pokemon);
    }
  }

  confirmSelection(): void {
    if (this.pokemonSeleccionados.length === this.pokemonCount) {
      // Navegar y pasar el estado
      this.router.navigate(['/batalla'], { state: { pokemonSeleccionados: this.pokemonSeleccionados } });
    } else {
      alert('Selecciona exactamente 2 Pokémon antes de continuar.');
    }
  }
  
  deselectAll(): void {
    this.pokemonSeleccionados = [];
  }
}
