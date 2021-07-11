import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CosmovisionComponent } from './cosmovision.component';

describe('CosmovisionComponent', () => {
  let component: CosmovisionComponent;
  let fixture: ComponentFixture<CosmovisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CosmovisionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CosmovisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
