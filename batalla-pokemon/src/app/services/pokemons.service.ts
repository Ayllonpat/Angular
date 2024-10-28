import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonResponsive } from '../interfaces/pokemons.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  constructor(private http: HttpClient) {}

  getPokemons(): Observable<PokemonResponsive> {
    return this.http.get<PokemonResponsive>('https://pokeapi.co/api/v2/pokemon/');
  }
}
