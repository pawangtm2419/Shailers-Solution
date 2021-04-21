import { TestBed } from '@angular/core/testing';

import { OfficeListService } from './office-list.service';

describe('OfficeListService', () => {
  let service: OfficeListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OfficeListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
