import { TestBed } from '@angular/core/testing';

import { AdminEmpTimeSheetListService } from './admin-emp-time-sheet-list.service';

describe('AdminEmpTimeSheetListService', () => {
  let service: AdminEmpTimeSheetListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminEmpTimeSheetListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
