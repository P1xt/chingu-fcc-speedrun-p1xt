import { TestBed, inject } from '@angular/core/testing';
import { Http, Response, Jsonp, URLSearchParams } from '@angular/http';
import { QuotesApiService } from './quotes-api.service';

describe('QuotesApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuotesApiService, Http, Response, Jsonp, URLSearchParams]
    });
  });


});
