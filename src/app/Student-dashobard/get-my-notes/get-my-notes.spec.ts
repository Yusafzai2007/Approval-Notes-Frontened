import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetMyNotes } from './get-my-notes';

describe('GetMyNotes', () => {
  let component: GetMyNotes;
  let fixture: ComponentFixture<GetMyNotes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetMyNotes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetMyNotes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
