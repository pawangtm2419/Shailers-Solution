import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAssignActivityComponent } from './admin-assign-activity.component';

describe('AdminAssignActivityComponent', () => {
  let component: AdminAssignActivityComponent;
  let fixture: ComponentFixture<AdminAssignActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAssignActivityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAssignActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
