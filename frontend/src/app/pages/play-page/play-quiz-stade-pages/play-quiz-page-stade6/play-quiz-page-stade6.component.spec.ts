import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayQuizPageStade6Component } from './play-quiz-page-stade6.component';

describe('PlayQuizPageComponent', () => {
  let component: PlayQuizPageStade6Component;
  let fixture: ComponentFixture<PlayQuizPageStade6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayQuizPageStade6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayQuizPageStade6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
