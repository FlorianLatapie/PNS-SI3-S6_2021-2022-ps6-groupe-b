import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateQuizPageComponent } from './create-quiz-page.component';

describe('CreateQuizPageComponent', () => {
  let component: CreateQuizPageComponent;
  let fixture: ComponentFixture<CreateQuizPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateQuizPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateQuizPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
