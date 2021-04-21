import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAttendenceListComponent } from './admin-attendence-list.component';

describe('AdminAttendenceListComponent', () => {
  let component: AdminAttendenceListComponent;
  let fixture: ComponentFixture<AdminAttendenceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAttendenceListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAttendenceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
