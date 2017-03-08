import { TestBed, inject } from '@angular/core/testing';

import { QuotesApiService } from './quotes-api.service';

describe('QuotesApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuotesApiService]
    });
  });

  it('should ...', inject([QuotesApiService], (service: QuotesApiService) => {
    expect(service).toBeTruthy();
  }));
});
