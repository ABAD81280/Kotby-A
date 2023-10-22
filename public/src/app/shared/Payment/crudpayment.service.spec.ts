import { TestBed } from '@angular/core/testing';

import { CRUDpaymentService } from './crudpayment.service';

describe('CRUDpaymentService', () => {
  let service: CRUDpaymentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CRUDpaymentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
