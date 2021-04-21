import { TestBed } from '@angular/core/testing';

import { AttendenceOutService } from './attendence-out.service';

describe('AttendenceOutService', () => {
  let service: AttendenceOutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AttendenceOutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
