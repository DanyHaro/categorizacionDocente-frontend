import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActitudesLaboralesComponent } from './actitudes-laborales.component';

describe('ActitudesLaboralesComponent', () => {
  let component: ActitudesLaboralesComponent;
  let fixture: ComponentFixture<ActitudesLaboralesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActitudesLaboralesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActitudesLaboralesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
