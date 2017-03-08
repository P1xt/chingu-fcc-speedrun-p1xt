import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { Angular2FontAwesomeModule } from 'angular2-font-awesome/angular2-font-awesome';

import 'hammerjs';
import { AppComponent } from './components/app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RandomQuoteComponent } from './components/random-quote/random-quote.component';

import { QuotesApiService } from './services/quotes-api.service';
import { TruncateTweetPipe } from './pipes/truncate-tweet.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RandomQuoteComponent,
    TruncateTweetPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    Angular2FontAwesomeModule,
    JsonpModule
  ],
  providers: [ 
    QuotesApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
