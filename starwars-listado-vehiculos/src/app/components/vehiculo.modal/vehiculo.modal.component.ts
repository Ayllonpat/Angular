import { Component, inject, Input } from '@angular/core';
import { Vehiculo } from '../../interfaces/Starwars.interface';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-vehiculo.modal',
  templateUrl: './vehiculo.modal.component.html',
  styleUrl: './vehiculo.modal.component.css'
})
export class VehiculoModalComponent {

  activeModal = inject(NgbActiveModal)
  @Input() vehiculo!: Vehiculo; 

  closeModal() {
    this.activeModal.close();
  }

}
