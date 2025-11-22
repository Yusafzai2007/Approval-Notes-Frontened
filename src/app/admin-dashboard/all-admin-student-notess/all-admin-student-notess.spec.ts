import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAdminStudentNotess } from './all-admin-student-notess';

describe('AllAdminStudentNotess', () => {
  let component: AllAdminStudentNotess;
  let fixture: ComponentFixture<AllAdminStudentNotess>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllAdminStudentNotess]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllAdminStudentNotess);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
