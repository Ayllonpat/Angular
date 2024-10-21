import { Component, OnInit } from '@angular/core';
import { Personajes } from '../../interfaces/Personajes.interface';
import { PersonajesService } from '../../services/personajes.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrl: './personajes.component.css'
})
export class PersonajesComponent implements OnInit{

  listadoPersonajes: Personajes[] = [ ];

  constructor(private personajesService: PersonajesService){}

  ngOnInit(): void {
    this.personajesService.getListadoPersonajes().subscribe((respuesta ) => { 
      this.listadoPersonajes = respuesta.results;//si llamamos a la api directamente tiene que ser respuesta.result
    });
  }

}
