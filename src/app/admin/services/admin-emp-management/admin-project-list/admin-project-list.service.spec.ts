import { TestBed } from '@angular/core/testing';

import { AdminProjectListService } from './admin-project-list.service';

describe('AdminProjectListService', () => {
  let service: AdminProjectListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminProjectListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
