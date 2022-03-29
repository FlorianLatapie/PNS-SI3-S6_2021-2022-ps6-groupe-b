import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayQuizPageStade4Component } from './play-quiz-page-stade4.component';

describe('PlayQuizPageComponent', () => {
  let component: PlayQuizPageStade4Component;
  let fixture: ComponentFixture<PlayQuizPageStade4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayQuizPageStade4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayQuizPageStade4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
