import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdviserConsejeriaComponent } from './adviser-consejeria.component';

describe('AdviserConsejeriaComponent', () => {
  let component: AdviserConsejeriaComponent;
  let fixture: ComponentFixture<AdviserConsejeriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdviserConsejeriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdviserConsejeriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
