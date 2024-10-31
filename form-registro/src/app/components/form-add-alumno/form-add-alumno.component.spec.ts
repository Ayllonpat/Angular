import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddAlumnoComponent } from './form-add-alumno.component';

describe('FormAddAlumnoComponent', () => {
  let component: FormAddAlumnoComponent;
  let fixture: ComponentFixture<FormAddAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormAddAlumnoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAddAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
