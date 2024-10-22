import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListadoVehiculosResponse } from '../interfaces/Starwars.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VehiculoService {
  
  constructor(private http: HttpClient) {}

  getVehiculoList(): Observable<ListadoVehiculosResponse> {
    return this.http.get<ListadoVehiculosResponse>('https://swapi.dev/api/vehicles');
  }
}