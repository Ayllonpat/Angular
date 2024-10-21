import { Component, Inject, Input } from '@angular/core';
import { Personajes } from '../../interfaces/Personajes.interface';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {

  @Input() personaje!: Personajes; 

  constructor(public activeModal: NgbActiveModal) {} 

  closeModal() {
    this.activeModal.close();
  }

}
