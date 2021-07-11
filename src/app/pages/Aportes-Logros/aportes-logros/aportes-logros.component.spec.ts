import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AportesLogrosComponent } from './aportes-logros.component';

describe('AportesLogrosComponent', () => {
  let component: AportesLogrosComponent;
  let fixture: ComponentFixture<AportesLogrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AportesLogrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AportesLogrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
