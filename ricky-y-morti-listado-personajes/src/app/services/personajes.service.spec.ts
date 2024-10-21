import { TestBed } from '@angular/core/testing';

import { PersonajesServiceService } from './personajes.service';

describe('PersonajesServiceService', () => {
  let service: PersonajesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonajesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
