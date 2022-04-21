import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsUserPageComponent } from './stats-user-page.component';

describe('StatsUserPageComponent', () => {
  let component: StatsUserPageComponent;
  let fixture: ComponentFixture<StatsUserPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatsUserPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsUserPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
