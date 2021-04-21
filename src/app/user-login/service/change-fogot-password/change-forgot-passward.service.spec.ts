import { TestBed } from '@angular/core/testing';

import { ChangeForgotPasswardService } from './change-forgot-passward.service';

describe('ChangeForgotPasswardService', () => {
  let service: ChangeForgotPasswardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChangeForgotPasswardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
