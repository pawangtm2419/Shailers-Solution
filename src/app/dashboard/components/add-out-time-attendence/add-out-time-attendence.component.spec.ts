import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOutTimeAttendenceComponent } from './add-out-time-attendence.component';

describe('AddOutTimeAttendenceComponent', () => {
  let component: AddOutTimeAttendenceComponent;
  let fixture: ComponentFixture<AddOutTimeAttendenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOutTimeAttendenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOutTimeAttendenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
