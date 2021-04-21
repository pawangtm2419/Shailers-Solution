import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminManageExpenseComponent } from './admin-manage-expense.component';

describe('AdminManageExpenseComponent', () => {
  let component: AdminManageExpenseComponent;
  let fixture: ComponentFixture<AdminManageExpenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminManageExpenseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminManageExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
