import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VehiculoListComponent } from './components/vehiculos/vehiculos.component';
import { MaterialModule } from './modules/material.module';
import { provideHttpClient } from '@angular/common/http';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { PageNotFoundComponent } from './components/page.not.found/page.not.found.component';
import { VehiculoModalComponent } from './components/vehiculo.modal/vehiculo.modal.component';
import { PersonajeModalComponent } from './components/personaje.modal/personaje.modal.component';
import { MenuComponent } from './components/menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    VehiculoListComponent,
    PersonajesComponent,
    PageNotFoundComponent,
    VehiculoModalComponent,
    PersonajeModalComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MaterialModule
  ],
  providers: [
    provideAnimationsAsync(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
