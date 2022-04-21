import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsInstancesPageComponent } from './stats-instances-page.component';

describe('StatsInstancesPageComponent', () => {
  let component: StatsInstancesPageComponent;
  let fixture: ComponentFixture<StatsInstancesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatsInstancesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsInstancesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
