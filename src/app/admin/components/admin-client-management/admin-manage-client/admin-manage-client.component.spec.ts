import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminManageClientComponent } from './admin-manage-client.component';

describe('AdminManageClientComponent', () => {
  let component: AdminManageClientComponent;
  let fixture: ComponentFixture<AdminManageClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminManageClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminManageClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
