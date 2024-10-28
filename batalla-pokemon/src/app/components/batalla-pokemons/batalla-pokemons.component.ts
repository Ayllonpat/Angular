import { Component, Input, OnInit } from '@angular/core';
import { Result } from '../../interfaces/pokemons.interface';

@Component({
  selector: 'app-batalla-pokemons',
  templateUrl: './batalla-pokemons.component.html',
  styleUrls: ['./batalla-pokemons.component.css']
})
export class BatallaPokemonsComponent implements OnInit {
  @Input() pokemonSeleccionados: Result[] = [];
  combatStarted = false;
  battleLog: string[] = [];
  currentAttackerIndex = 0;

  ngOnInit(): void {

    if (history.state.pokemonSeleccionados) {
      this.pokemonSeleccionados = history.state.pokemonSeleccionados;

      this.pokemonSeleccionados.forEach(pokemon => {
        pokemon.health = Math.floor(Math.random() * 100) + 1; 
      });
    }
    console.log("Pokémon seleccionados:", this.pokemonSeleccionados);
  }

  getImage(pokemon: Result): string {
    if (!pokemon) return '';
    const id = pokemon.url.match(/\/(\d+)\//)?.[1];
    return id
      ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`
      : '';
  }

  startBattle(): void {
    this.combatStarted = true;
    this.battleLog.push('¡La batalla ha comenzado!');
  }

  attack(): void {
    if (!this.combatStarted || this.pokemonSeleccionados.length < 2) return;

    const attacker = this.pokemonSeleccionados[this.currentAttackerIndex];
    const defender = this.pokemonSeleccionados[1 - this.currentAttackerIndex]; 

    const damage = Math.floor(Math.random() * 16) + 5; 
    defender.health = Math.max(defender.health - damage, 0); 

    this.battleLog.push(`${attacker.name} ataca a ${defender.name} y causa ${damage} puntos de daño!`);

    if (defender.health === 0) {
      this.battleLog.push(`${defender.name} ha sido derrotado!`);
      this.combatStarted = false; 
    } else {
      this.currentAttackerIndex = 1 - this.currentAttackerIndex;
    }
  }
}
