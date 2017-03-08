import { TestBed, async } from '@angular/core/testing';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RandomQuoteComponent } from './random-quote/random-quote.component';
import { TruncateTweetPipe } from '../pipes/truncate-tweet.pipe';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[MaterialModule.forRoot(),HttpModule, JsonpModule ],
      declarations: [
        AppComponent, HeaderComponent, FooterComponent, RandomQuoteComponent,TruncateTweetPipe
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
