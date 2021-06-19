import { TestBed } from '@angular/core/testing';

import { ItemDocentesService } from './item-docentes.service';

describe('ItemDocentesService', () => {
  let service: ItemDocentesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemDocentesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
