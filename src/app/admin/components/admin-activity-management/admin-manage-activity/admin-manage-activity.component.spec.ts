import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminManageActivityComponent } from './admin-manage-activity.component';

describe('AdminManageActivityComponent', () => {
  let component: AdminManageActivityComponent;
  let fixture: ComponentFixture<AdminManageActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminManageActivityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminManageActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
