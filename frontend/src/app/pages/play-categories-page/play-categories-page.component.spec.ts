import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayCategoriesPageComponent } from './play-categories-page.component';

describe('PlayCategoriesPageComponent', () => {
  let component: PlayCategoriesPageComponent;
  let fixture: ComponentFixture<PlayCategoriesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayCategoriesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayCategoriesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
