import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipacionInvComponent } from './participacion-inv.component';

describe('ParticipacionInvComponent', () => {
  let component: ParticipacionInvComponent;
  let fixture: ComponentFixture<ParticipacionInvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticipacionInvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipacionInvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
