import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WikiViewerComponent } from './wiki-viewer.component';

describe('WikiViewerComponent', () => {
  let component: WikiViewerComponent;
  let fixture: ComponentFixture<WikiViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WikiViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WikiViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
