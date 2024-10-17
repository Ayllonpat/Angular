import { Component } from '@angular/core';
import { find } from 'rxjs';

@Component({
  selector: 'app-barra-progreso',
  templateUrl: './barra-progreso.component.html',
  styleUrl: './barra-progreso.component.css'
})
export class BarraProgresoComponent {

  valoracion = 30;
  ratingClass = 'danger';

  cambiarColor(){
    if(this.valoracion < 50){
      this.ratingClass = 'danger'
    }
  }

}
