import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAdminClassess } from './all-admin-classess';

describe('AllAdminClassess', () => {
  let component: AllAdminClassess;
  let fixture: ComponentFixture<AllAdminClassess>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllAdminClassess]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllAdminClassess);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
