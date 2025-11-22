import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewStudentAdmin } from './view-student-admin';

describe('ViewStudentAdmin', () => {
  let component: ViewStudentAdmin;
  let fixture: ComponentFixture<ViewStudentAdmin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewStudentAdmin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewStudentAdmin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
