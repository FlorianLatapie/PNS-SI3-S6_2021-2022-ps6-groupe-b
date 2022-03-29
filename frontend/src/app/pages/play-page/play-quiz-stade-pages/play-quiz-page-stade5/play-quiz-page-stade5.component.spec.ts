import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayQuizPageStade5Component } from './play-quiz-page-stade5.component';

describe('PlayQuizPageComponent', () => {
  let component: PlayQuizPageStade5Component;
  let fixture: ComponentFixture<PlayQuizPageStade5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayQuizPageStade5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayQuizPageStade5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
