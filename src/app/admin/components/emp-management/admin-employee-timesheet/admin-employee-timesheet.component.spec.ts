import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEmployeeTimesheetComponent } from './admin-employee-timesheet.component';

describe('AdminEmployeeTimesheetComponent', () => {
  let component: AdminEmployeeTimesheetComponent;
  let fixture: ComponentFixture<AdminEmployeeTimesheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEmployeeTimesheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEmployeeTimesheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
