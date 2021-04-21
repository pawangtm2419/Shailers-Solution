import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTimesheetRecordComponent } from './admin-timesheet-record.component';

describe('AdminTimesheetRecordComponent', () => {
  let component: AdminTimesheetRecordComponent;
  let fixture: ComponentFixture<AdminTimesheetRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminTimesheetRecordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTimesheetRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
