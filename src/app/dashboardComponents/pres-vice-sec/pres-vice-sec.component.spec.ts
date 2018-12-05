import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresViceSecComponent } from './pres-vice-sec.component';

describe('PresViceSecComponent', () => {
  let component: PresViceSecComponent;
  let fixture: ComponentFixture<PresViceSecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresViceSecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresViceSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
