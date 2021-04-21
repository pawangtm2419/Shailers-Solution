import { TestBed } from '@angular/core/testing';

import { OtpVerifySubjectService } from './otp-verify-subject.service';

describe('OtpVerifySubjectService', () => {
  let service: OtpVerifySubjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OtpVerifySubjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
