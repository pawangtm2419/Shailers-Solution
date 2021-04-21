import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDomainDataComponent } from './admin-domain-data.component';

describe('AdminDomainDataComponent', () => {
  let component: AdminDomainDataComponent;
  let fixture: ComponentFixture<AdminDomainDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDomainDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDomainDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
