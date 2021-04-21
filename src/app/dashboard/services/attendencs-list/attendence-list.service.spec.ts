import { TestBed } from '@angular/core/testing';

import { AttendenceListService } from './attendence-list.service';

describe('AttendenceListService', () => {
  let service: AttendenceListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AttendenceListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
