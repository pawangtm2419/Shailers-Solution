import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignProjectByAdminComponent } from './assign-project-by-admin.component';

describe('AssignProjectByAdminComponent', () => {
  let component: AssignProjectByAdminComponent;
  let fixture: ComponentFixture<AssignProjectByAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignProjectByAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignProjectByAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
