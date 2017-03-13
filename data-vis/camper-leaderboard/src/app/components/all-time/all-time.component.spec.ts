import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTimeComponent } from './all-time.component';

describe('AllTimeComponent', () => {
  let component: AllTimeComponent;
  let fixture: ComponentFixture<AllTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
