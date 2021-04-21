import { TestBed } from '@angular/core/testing';

import { AddShiftService } from './add-shift.service';

describe('AddShiftService', () => {
  let service: AddShiftService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddShiftService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
