import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocentesCardsComponent } from './docentes-cards.component';

describe('DocentesCardsComponent', () => {
  let component: DocentesCardsComponent;
  let fixture: ComponentFixture<DocentesCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocentesCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocentesCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
