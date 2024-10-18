import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../../interfaces/Starwars.interface';
import { VehiculoService } from '../../services/vehiculo.service';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.css']
})
export class VehiculoListComponent implements OnInit {
  listadoCasas: Vehiculo[] = [];

  constructor(private vehiculoService: VehiculoService) {}

  ngOnInit(): void {
    this.vehiculoService.getVehiculoList().subscribe((respuesta) => {
      this.listadoCasas = respuesta;
    });
  }

  trackByUrl(index: number, item: Vehiculo): string {
    return item.url; // Utilizamos la URL como identificador único
  }
}
