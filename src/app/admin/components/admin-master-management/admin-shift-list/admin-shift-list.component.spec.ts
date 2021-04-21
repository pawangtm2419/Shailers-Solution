import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminShiftListComponent } from './admin-shift-list.component';

describe('AdminShiftListComponent', () => {
  let component: AdminShiftListComponent;
  let fixture: ComponentFixture<AdminShiftListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminShiftListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminShiftListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
