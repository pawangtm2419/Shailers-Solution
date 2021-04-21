import { TestBed } from '@angular/core/testing';

import { AdminEmpViewService } from './admin-emp-view.service';

describe('AdminEmpViewService', () => {
  let service: AdminEmpViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminEmpViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
