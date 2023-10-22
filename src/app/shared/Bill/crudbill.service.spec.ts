import { TestBed } from '@angular/core/testing';

import { CRUDbillService } from './crudbill.service';

describe('CRUDbillService', () => {
  let service: CRUDbillService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CRUDbillService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
