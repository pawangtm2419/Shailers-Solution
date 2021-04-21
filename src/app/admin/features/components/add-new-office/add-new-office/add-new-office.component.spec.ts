import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewOfficeComponent } from './add-new-office.component';

describe('AddNewOfficeComponent', () => {
  let component: AddNewOfficeComponent;
  let fixture: ComponentFixture<AddNewOfficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewOfficeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
