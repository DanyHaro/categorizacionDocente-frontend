import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiplomaturasComponent } from './diplomaturas.component';

describe('DiplomaturasComponent', () => {
  let component: DiplomaturasComponent;
  let fixture: ComponentFixture<DiplomaturasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiplomaturasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiplomaturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
