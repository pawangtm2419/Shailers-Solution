import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGiveAccessComponent } from './admin-give-access.component';

describe('AdminGiveAccessComponent', () => {
  let component: AdminGiveAccessComponent;
  let fixture: ComponentFixture<AdminGiveAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminGiveAccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminGiveAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
