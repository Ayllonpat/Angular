import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonajeModalComponent } from './personaje.modal.component';

describe('PersonajeModalComponent', () => {
  let component: PersonajeModalComponent;
  let fixture: ComponentFixture<PersonajeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonajeModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonajeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
