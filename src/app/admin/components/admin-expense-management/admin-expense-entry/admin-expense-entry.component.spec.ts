import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminExpenseEntryComponent } from './admin-expense-entry.component';

describe('AdminExpenseEntryComponent', () => {
  let component: AdminExpenseEntryComponent;
  let fixture: ComponentFixture<AdminExpenseEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminExpenseEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminExpenseEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
