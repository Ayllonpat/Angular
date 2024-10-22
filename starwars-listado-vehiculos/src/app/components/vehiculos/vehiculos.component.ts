import { Component, inject, OnInit } from '@angular/core';
import { Vehiculo } from '../../interfaces/Starwars.interface';
import { VehiculoService } from '../../services/vehiculo.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { VehiculoModalComponent } from '../vehiculo.modal/vehiculo.modal.component';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.css']
})
export class VehiculoListComponent implements OnInit {
  listadoVehiculos: Vehiculo[] = [];

  private modalService = inject(NgbModal);
  
  constructor(private vehiculoService: VehiculoService) {}

  ngOnInit(): void {
    this.vehiculoService.getVehiculoList().subscribe((respuesta) => { 
      this.listadoVehiculos = respuesta.results;//si llamamos a la api directamente tiene que ser respuesta.result
    });
  }

  openModal(item: Vehiculo) {
    const modalRef = this.modalService.open(VehiculoModalComponent, { size: 'lg' });
    modalRef.componentInstance.vehiculo = item; 
  }

  //trackByUrl(index: number, item: Vehiculo): string {
   // return item.url; 
  //}
}
