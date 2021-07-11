import { TestBed } from '@angular/core/testing';

import { SubfactorService } from './subfactor.service';

describe('SubfactorService', () => {
  let service: SubfactorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubfactorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
