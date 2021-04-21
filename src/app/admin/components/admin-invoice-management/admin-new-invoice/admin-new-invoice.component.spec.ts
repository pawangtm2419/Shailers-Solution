import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNewInvoiceComponent } from './admin-new-invoice.component';

describe('AdminNewInvoiceComponent', () => {
  let component: AdminNewInvoiceComponent;
  let fixture: ComponentFixture<AdminNewInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminNewInvoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminNewInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
