import { TestBed } from '@angular/core/testing';

import { AttendenceInService } from './attendence-in.service';

describe('AttendenceInService', () => {
  let service: AttendenceInService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AttendenceInService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
