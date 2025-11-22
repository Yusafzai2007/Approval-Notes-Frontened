import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllClassess } from './all-classess';

describe('AllClassess', () => {
  let component: AllClassess;
  let fixture: ComponentFixture<AllClassess>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllClassess]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllClassess);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
