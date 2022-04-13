import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsCategoriesPageComponent } from './stats-categories-page.component';

describe('StatsCategoriesPageComponent', () => {
  let component: StatsCategoriesPageComponent;
  let fixture: ComponentFixture<StatsCategoriesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatsCategoriesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsCategoriesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
