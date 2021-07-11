import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestiondocenteComponent } from './gestiondocente.component';

describe('GestiondocenteComponent', () => {
  let component: GestiondocenteComponent;
  let fixture: ComponentFixture<GestiondocenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestiondocenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestiondocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
