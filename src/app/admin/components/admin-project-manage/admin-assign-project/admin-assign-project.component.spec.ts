import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAssignProjectComponent } from './admin-assign-project.component';

describe('AdminAssignProjectComponent', () => {
  let component: AdminAssignProjectComponent;
  let fixture: ComponentFixture<AdminAssignProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAssignProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAssignProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
