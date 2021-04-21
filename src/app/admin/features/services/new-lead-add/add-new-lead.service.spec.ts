import { TestBed } from '@angular/core/testing';

import { AddNewLeadService } from './add-new-lead.service';

describe('AddNewLeadService', () => {
  let service: AddNewLeadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddNewLeadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
