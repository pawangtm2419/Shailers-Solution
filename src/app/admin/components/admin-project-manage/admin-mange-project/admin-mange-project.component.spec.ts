import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMangeProjectComponent } from './admin-mange-project.component';

describe('AdminMangeProjectComponent', () => {
  let component: AdminMangeProjectComponent;
  let fixture: ComponentFixture<AdminMangeProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminMangeProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMangeProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
