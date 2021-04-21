import { TestBed } from '@angular/core/testing';

import { ResendOtpService } from './resend-otp.service';

describe('ResendOtpService', () => {
  let service: ResendOtpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResendOtpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
