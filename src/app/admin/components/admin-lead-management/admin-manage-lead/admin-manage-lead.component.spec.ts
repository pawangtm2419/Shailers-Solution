import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminManageLeadComponent } from './admin-manage-lead.component';

describe('AdminManageLeadComponent', () => {
  let component: AdminManageLeadComponent;
  let fixture: ComponentFixture<AdminManageLeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminManageLeadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminManageLeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
