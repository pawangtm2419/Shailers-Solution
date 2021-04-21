import { TestBed } from '@angular/core/testing';

import { DomainManagementService } from './domain-management.service';

describe('DomainManagementService', () => {
  let service: DomainManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DomainManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
