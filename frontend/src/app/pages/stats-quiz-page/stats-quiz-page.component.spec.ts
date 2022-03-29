import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsQuizPageComponent } from './stats-quiz-page.component';

describe('StatsQuizPageComponent', () => {
  let component: StatsQuizPageComponent;
  let fixture: ComponentFixture<StatsQuizPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatsQuizPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsQuizPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
