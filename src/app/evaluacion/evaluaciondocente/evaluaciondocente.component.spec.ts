import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluaciondocenteComponent } from './evaluaciondocente.component';

describe('EvaluaciondocenteComponent', () => {
  let component: EvaluaciondocenteComponent;
  let fixture: ComponentFixture<EvaluaciondocenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaluaciondocenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluaciondocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
