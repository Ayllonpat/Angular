import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PersonajesRespons } from '../interfaces/Personajes.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  constructor(private http: HttpClient) { }

  getListadoPersonajes(): Observable<PersonajesRespons> {
    return this.http.get<PersonajesRespons>('https://rickandmortyapi.com/api/character')
  }

}
