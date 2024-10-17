import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TablaComponent } from './components/tabla/tabla.component';

import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms'; // Para usar [(ngModel)] con checkboxes
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Importa animaciones de Angular

@NgModule({
  declarations: [
    AppComponent,
    TablaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,  // Importa esto para que Angular Material funcione
    MatTableModule,
    MatCheckboxModule,
    FormsModule  // Asegúrate de que FormsModule esté importado
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
