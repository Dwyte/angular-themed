import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderboardGraphComponent } from './leaderboard-graph.component';

describe('LeaderboardGraphComponent', () => {
  let component: LeaderboardGraphComponent;
  let fixture: ComponentFixture<LeaderboardGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaderboardGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaderboardGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
