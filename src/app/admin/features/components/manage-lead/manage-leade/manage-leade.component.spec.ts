import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageLeadeComponent } from './manage-leade.component';

describe('ManageLeadeComponent', () => {
  let component: ManageLeadeComponent;
  let fixture: ComponentFixture<ManageLeadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageLeadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageLeadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
