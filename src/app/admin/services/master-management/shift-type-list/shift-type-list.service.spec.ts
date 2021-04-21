import { TestBed } from '@angular/core/testing';

import { ShiftTypeListService } from './shift-type-list.service';

describe('ShiftTypeListService', () => {
  let service: ShiftTypeListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShiftTypeListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
