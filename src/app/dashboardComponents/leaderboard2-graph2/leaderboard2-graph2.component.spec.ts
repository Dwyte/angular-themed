import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Leaderboard2Graph2Component } from './leaderboard2-graph2.component';

describe('Leaderboard2Graph2Component', () => {
  let component: Leaderboard2Graph2Component;
  let fixture: ComponentFixture<Leaderboard2Graph2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Leaderboard2Graph2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Leaderboard2Graph2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
