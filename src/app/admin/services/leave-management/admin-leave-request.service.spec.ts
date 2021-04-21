import { TestBed } from '@angular/core/testing';

import { AdminLeaveRequestService } from './admin-leave-request.service';

describe('AdminLeaveRequestService', () => {
  let service: AdminLeaveRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminLeaveRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
