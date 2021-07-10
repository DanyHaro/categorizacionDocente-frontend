import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouniversitariaComponent } from './nouniversitaria.component';

describe('NouniversitariaComponent', () => {
  let component: NouniversitariaComponent;
  let fixture: ComponentFixture<NouniversitariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouniversitariaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NouniversitariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
