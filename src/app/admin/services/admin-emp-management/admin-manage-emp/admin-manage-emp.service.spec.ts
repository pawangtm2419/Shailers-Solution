import { TestBed } from '@angular/core/testing';

import { AdminManageEmpService } from './admin-manage-emp.service';

describe('AdminManageEmpService', () => {
  let service: AdminManageEmpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminManageEmpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
