import { TestBed } from '@angular/core/testing';

import { AdminAssignProjectListService } from './admin-assign-project-list.service';

describe('AdminAssignProjectListService', () => {
  let service: AdminAssignProjectListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminAssignProjectListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
