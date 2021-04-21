import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewProjectsComponent } from './add-new-projects.component';

describe('AddNewProjectsComponent', () => {
  let component: AddNewProjectsComponent;
  let fixture: ComponentFixture<AddNewProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
