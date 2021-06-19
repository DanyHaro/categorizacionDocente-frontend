import { TestBed } from '@angular/core/testing';

import { LegajosDocentesService } from './legajos-docentes.service';

describe('LegajosDocentesService', () => {
  let service: LegajosDocentesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LegajosDocentesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
