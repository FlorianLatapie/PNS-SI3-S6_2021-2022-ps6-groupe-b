import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizListSelectComponent } from './quiz-list-select.component';

describe('QuizListSelectComponent', () => {
  let component: QuizListSelectComponent;
  let fixture: ComponentFixture<QuizListSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizListSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizListSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
