import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidelinesPageComponent } from './guidelines-page.component';

describe('GuidelinesPageComponent', () => {
  let component: GuidelinesPageComponent;
  let fixture: ComponentFixture<GuidelinesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuidelinesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuidelinesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
