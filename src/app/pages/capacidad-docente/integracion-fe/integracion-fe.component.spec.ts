import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegracionFeComponent } from './integracion-fe.component';

describe('IntegracionFeComponent', () => {
  let component: IntegracionFeComponent;
  let fixture: ComponentFixture<IntegracionFeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntegracionFeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegracionFeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
