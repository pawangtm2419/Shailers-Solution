import { TestBed } from '@angular/core/testing';

import { ProjectcountdetailsService } from './projectcountdetails.service';

describe('ProjectcountdetailsService', () => {
  let service: ProjectcountdetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectcountdetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
