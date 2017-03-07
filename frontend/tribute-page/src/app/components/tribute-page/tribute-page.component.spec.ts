import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TributePageComponent } from './tribute-page.component';

describe('TributePageComponent', () => {
  let component: TributePageComponent;
  let fixture: ComponentFixture<TributePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TributePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TributePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
