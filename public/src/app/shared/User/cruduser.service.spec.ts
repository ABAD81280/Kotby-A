import { TestBed } from '@angular/core/testing';

import { CRUDuserService } from './cruduser.service';

describe('CRUDuserService', () => {
  let service: CRUDuserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CRUDuserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
