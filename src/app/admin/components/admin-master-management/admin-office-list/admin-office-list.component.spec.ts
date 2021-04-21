import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOfficeListComponent } from './admin-office-list.component';

describe('AdminOfficeListComponent', () => {
  let component: AdminOfficeListComponent;
  let fixture: ComponentFixture<AdminOfficeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminOfficeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminOfficeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
