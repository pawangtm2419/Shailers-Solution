import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLeadCategoryComponent } from './admin-lead-category.component';

describe('AdminLeadCategoryComponent', () => {
  let component: AdminLeadCategoryComponent;
  let fixture: ComponentFixture<AdminLeadCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminLeadCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLeadCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
