import { TestBed } from '@angular/core/testing';

import { AttendenceNotifyService } from './attendence-notify.service';

describe('AttendenceNotifyService', () => {
  let service: AttendenceNotifyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AttendenceNotifyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
