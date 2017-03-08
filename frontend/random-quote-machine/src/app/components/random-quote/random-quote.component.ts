import { Component } from '@angular/core';
import { Quote } from '../../classes/quote';
import { QuotesApiService } from '../../services/quotes-api.service';
import { Observable }       from 'rxjs/Observable';

@Component({
  selector: 'app-random-quote',
  providers: [ QuotesApiService ],
  templateUrl: './random-quote.component.html',
  styleUrls: ['./random-quote.component.scss']
})
export class RandomQuoteComponent {
  quote: Quote = {
    quoteAuthor: "Socrates ",
    quoteLink: "http://forismatic.com/en/c8dbaa3268/",
    quoteText: "Wisdom begins in wonder. ",
    senderLink: "",
    senderName: ""
  }
  constructor (private quotesApiService: QuotesApiService) { }
  ngOnInit() {
  }
  getQuote(term: string) {
    this.quotesApiService.getQuote()
      .subscribe(quotes => this.quote = quotes );
  }
}
