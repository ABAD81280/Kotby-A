import { TestBed } from '@angular/core/testing';

import { CRUDbooksService } from './crudbooks.service';

describe('CRUDbooksService', () => {
  let service: CRUDbooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CRUDbooksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
