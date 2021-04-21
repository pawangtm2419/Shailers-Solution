import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOldInvoiceComponent } from './admin-old-invoice.component';

describe('AdminOldInvoiceComponent', () => {
  let component: AdminOldInvoiceComponent;
  let fixture: ComponentFixture<AdminOldInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminOldInvoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminOldInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
