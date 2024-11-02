import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatSelectModule } from '@angular/material/select'; // Importa el módulo de selección de Angular Material
import { MatInputModule } from '@angular/material/input'; // Importa el módulo de entrada de Angular Material
import { AppComponent } from './app.component';
import { FormAddAlumnoComponent } from './components/form-add-alumno/form-add-alumno.component';

@NgModule({
  declarations: [
    AppComponent,
    FormAddAlumnoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    MatSelectModule, 
    MatInputModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
