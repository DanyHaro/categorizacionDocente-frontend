import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredocenteComponent } from './predocente.component';

describe('PredocenteComponent', () => {
  let component: PredocenteComponent;
  let fixture: ComponentFixture<PredocenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PredocenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PredocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
