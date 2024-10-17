import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
//onInit hace que lo haga nada mas cargar el componente
export class HomeComponent implements OnInit{

  nombre = "";
  apellidos = "";
  edad= 0;

  ngOnInit(): void {
    this.nombre = "Patricia";
    this.apellidos = "Alonso Ayllón";
    this.edad= 22;
  }

  calcBirthYear(){
    return 2024-this.edad;
  }

  showInfoDialog(){
    alert("No tengo más información para ti"+this.nombre)
  }
}
