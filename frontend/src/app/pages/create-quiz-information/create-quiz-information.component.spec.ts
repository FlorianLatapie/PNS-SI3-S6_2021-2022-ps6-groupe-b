import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateQuizInformationComponent } from './create-quiz-information.component';

describe('CreateQuizInformationComponent', () => {
  let component: CreateQuizInformationComponent;
  let fixture: ComponentFixture<CreateQuizInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateQuizInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateQuizInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
