import { TestBed } from '@angular/core/testing';

import { ManageExpenseService } from './manage-expense.service';

describe('ManageExpenseService', () => {
  let service: ManageExpenseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageExpenseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
