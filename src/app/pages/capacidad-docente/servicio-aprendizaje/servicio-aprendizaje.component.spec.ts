import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioAprendizajeComponent } from './servicio-aprendizaje.component';

describe('ServicioAprendizajeComponent', () => {
  let component: ServicioAprendizajeComponent;
  let fixture: ComponentFixture<ServicioAprendizajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicioAprendizajeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicioAprendizajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
