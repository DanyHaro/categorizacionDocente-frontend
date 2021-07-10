import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversitariaComponent } from './universitaria.component';

describe('UniversitariaComponent', () => {
  let component: UniversitariaComponent;
  let fixture: ComponentFixture<UniversitariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversitariaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversitariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
