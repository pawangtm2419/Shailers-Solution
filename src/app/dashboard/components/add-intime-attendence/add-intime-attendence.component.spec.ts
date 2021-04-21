import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddIntimeAttendenceComponent } from './add-intime-attendence.component';

describe('AddIntimeAttendenceComponent', () => {
  let component: AddIntimeAttendenceComponent;
  let fixture: ComponentFixture<AddIntimeAttendenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddIntimeAttendenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddIntimeAttendenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
