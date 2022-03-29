import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCategoryQuizzesComponent } from './update-category-quizzes.component';

describe('UpdateCategoryQuizzesComponent', () => {
  let component: UpdateCategoryQuizzesComponent;
  let fixture: ComponentFixture<UpdateCategoryQuizzesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCategoryQuizzesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCategoryQuizzesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
