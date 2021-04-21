import { TestBed } from '@angular/core/testing';

import { AddProjectByAdminService } from './add-project-by-admin.service';

describe('AddProjectByAdminService', () => {
  let service: AddProjectByAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddProjectByAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
