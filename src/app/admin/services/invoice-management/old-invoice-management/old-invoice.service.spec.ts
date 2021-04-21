import { TestBed } from '@angular/core/testing';

import { OldInvoiceService } from './old-invoice.service';

describe('OldInvoiceService', () => {
  let service: OldInvoiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OldInvoiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
