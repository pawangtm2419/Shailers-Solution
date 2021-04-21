import { TestBed } from '@angular/core/testing';

import { AddNewOfficeService } from './add-new-office.service';

describe('AddNewOfficeService', () => {
  let service: AddNewOfficeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddNewOfficeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
