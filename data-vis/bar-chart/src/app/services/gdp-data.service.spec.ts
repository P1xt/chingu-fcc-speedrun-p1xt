import { TestBed, inject } from '@angular/core/testing';

import { GdpDataService } from './gdp-data.service';

describe('GdpDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GdpDataService]
    });
  });

  it('should ...', inject([GdpDataService], (service: GdpDataService) => {
    expect(service).toBeTruthy();
  }));
});
