import { TestBed } from '@angular/core/testing';

import { UnipaisService } from './unipais.service';

describe('UnipaisService', () => {
  let service: UnipaisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnipaisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
