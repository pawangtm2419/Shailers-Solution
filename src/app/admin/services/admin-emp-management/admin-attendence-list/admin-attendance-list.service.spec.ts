import { TestBed } from '@angular/core/testing';

import { AdminAttendanceListService } from './admin-attendance-list.service';

describe('AdminAttendanceListService', () => {
  let service: AdminAttendanceListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminAttendanceListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
