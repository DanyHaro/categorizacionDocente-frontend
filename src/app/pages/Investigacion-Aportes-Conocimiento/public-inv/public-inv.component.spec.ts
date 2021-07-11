import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicInvComponent } from './public-inv.component';

describe('PublicInvComponent', () => {
  let component: PublicInvComponent;
  let fixture: ComponentFixture<PublicInvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicInvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicInvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
