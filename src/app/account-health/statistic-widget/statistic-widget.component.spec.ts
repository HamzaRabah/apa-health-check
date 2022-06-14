import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticWidgetComponent } from './statistic-widget.component';

describe('StatisticWidgetComponent', () => {
  let component: StatisticWidgetComponent;
  let fixture: ComponentFixture<StatisticWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatisticWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatisticWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
