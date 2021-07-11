import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReconocimientoCapacidadComponent } from './reconocimiento-capacidad.component';

describe('ReconocimientoCapacidadComponent', () => {
  let component: ReconocimientoCapacidadComponent;
  let fixture: ComponentFixture<ReconocimientoCapacidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReconocimientoCapacidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReconocimientoCapacidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
