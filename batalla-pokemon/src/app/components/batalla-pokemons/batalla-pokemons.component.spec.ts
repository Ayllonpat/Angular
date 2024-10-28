import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatallaPokemonsComponent } from './batalla-pokemons.component';

describe('BatallaPokemonsComponent', () => {
  let component: BatallaPokemonsComponent;
  let fixture: ComponentFixture<BatallaPokemonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BatallaPokemonsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BatallaPokemonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
