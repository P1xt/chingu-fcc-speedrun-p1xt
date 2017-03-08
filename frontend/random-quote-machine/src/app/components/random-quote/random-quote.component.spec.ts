import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TruncateTweetPipe } from '../../pipes/truncate-tweet.pipe';
import { RandomQuoteComponent } from './random-quote.component';

describe('RandomQuoteComponent', () => {
  let component: RandomQuoteComponent;
  let fixture: ComponentFixture<RandomQuoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomQuoteComponent, TruncateTweetPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
