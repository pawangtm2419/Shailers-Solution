import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminManageEmployeeComponent } from './admin-manage-employee.component';

describe('AdminManageEmployeeComponent', () => {
  let component: AdminManageEmployeeComponent;
  let fixture: ComponentFixture<AdminManageEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminManageEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminManageEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
