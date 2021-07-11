import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocenteParcialComponent } from './docente-parcial.component';

describe('DocenteParcialComponent', () => {
  let component: DocenteParcialComponent;
  let fixture: ComponentFixture<DocenteParcialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocenteParcialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocenteParcialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
