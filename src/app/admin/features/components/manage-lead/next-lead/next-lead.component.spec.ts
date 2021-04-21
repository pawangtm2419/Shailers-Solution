import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextLeadComponent } from './next-lead.component';

describe('NextLeadComponent', () => {
  let component: NextLeadComponent;
  let fixture: ComponentFixture<NextLeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NextLeadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NextLeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
