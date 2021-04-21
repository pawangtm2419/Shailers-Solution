import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminShiftTypeListComponent } from './admin-shift-type-list.component';

describe('AdminShiftTypeListComponent', () => {
  let component: AdminShiftTypeListComponent;
  let fixture: ComponentFixture<AdminShiftTypeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminShiftTypeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminShiftTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
