import { TestBed } from '@angular/core/testing';

import { ManageLeadService } from './manage-lead.service';

describe('ManageLeadService', () => {
  let service: ManageLeadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageLeadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
