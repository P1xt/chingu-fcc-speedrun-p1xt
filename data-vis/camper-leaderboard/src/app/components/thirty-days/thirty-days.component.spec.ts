import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirtyDaysComponent } from './thirty-days.component';

describe('ThirtyDaysComponent', () => {
  let component: ThirtyDaysComponent;
  let fixture: ComponentFixture<ThirtyDaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirtyDaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirtyDaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
