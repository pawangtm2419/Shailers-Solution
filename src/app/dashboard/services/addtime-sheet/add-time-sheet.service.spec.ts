import { TestBed } from '@angular/core/testing';

import { AddTimeSheetService } from './add-time-sheet.service';

describe('AddTimeSheetService', () => {
  let service: AddTimeSheetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddTimeSheetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
