import { Component, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PokemonsService } from '../../services/pokemons.service';
import { PokemonResponsive, Result } from '../../interfaces/pokemons.interface';
import { PokemonListResponsive } from '../../interfaces/batalla.pokemo.interface';
import { url } from 'inspector';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrl: './pokemons.component.css'
})
export class PokemonsComponent {

  listaPokemon: Result[] = []
  pokemonSeleccionados: Result[] = []
  buttonCount = 0;
  pokemonCount = 2;

  constructor(private service: PokemonsService) {}

  getPokemonList(): void {

    this.service.getPokemons().subscribe((res) => {

      this.listaPokemon = res.results;

    })
  }

  getImage(pokemon: Result): string {

    let id = pokemon.url.match(/\d+/g)?.[1]
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`;
  }

  capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  ngOnInit(): void {
      this.getPokemonList();
  }

  onCheckClick(pokemonClicked: Result | undefined) {
    this.buttonCount++
    console.log('Pokemon clicked:', pokemonClicked);    
    
    if(this.pokemonSeleccionados)
    
  }
}
