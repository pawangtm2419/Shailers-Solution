import { TestBed } from '@angular/core/testing';

import { EmpAttendenceDetailsService } from './emp-attendence-details.service';

describe('EmpAttendenceDetailsService', () => {
  let service: EmpAttendenceDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpAttendenceDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
