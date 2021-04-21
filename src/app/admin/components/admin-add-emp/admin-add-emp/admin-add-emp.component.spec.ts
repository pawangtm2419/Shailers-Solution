import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddEmpComponent } from './admin-add-emp.component';

describe('AdminAddEmpComponent', () => {
  let component: AdminAddEmpComponent;
  let fixture: ComponentFixture<AdminAddEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddEmpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
