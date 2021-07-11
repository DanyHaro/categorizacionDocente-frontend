import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidadminComponent } from './sidadmin.component';

describe('SidadminComponent', () => {
  let component: SidadminComponent;
  let fixture: ComponentFixture<SidadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
