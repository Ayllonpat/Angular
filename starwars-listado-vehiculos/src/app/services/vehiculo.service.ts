import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vehiculo } from '../interfaces/Starwars.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VehiculoService {
  constructor(private http: HttpClient) {}

  getVehiculoList(): Observable<Vehiculo[]> {
    return this.http.get<Vehiculo[]>('http://localhost:3000/locations');
  }
}