import { Injectable }    from '@angular/core';
import { Http, Response, Jsonp, URLSearchParams } from '@angular/http';
import { Quote } from '../classes/quote';

@Injectable()
export class QuotesApiService {

  constructor(private jsonp: Jsonp) { }

  getQuote = () => {
    let apiUrl: string = 'http://api.forismatic.com/api/1.0/';
    let params = new URLSearchParams();
    params.set('method', 'getQuote');
    params.set('format', 'jsonp');
    params.set('key', '457653');    
    params.set('lang', 'en');  
    params.set('jsonp', 'JSONP_CALLBACK');     
        return this.jsonp
               .get(apiUrl, { search: params })
               .map(response => response.json());
  }
}
