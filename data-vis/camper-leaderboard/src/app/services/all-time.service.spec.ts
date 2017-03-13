import { TestBed, inject } from '@angular/core/testing';

import { AllTimeService } from './all-time.service';

describe('AllTimeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AllTimeService]
    });
  });

  it('should ...', inject([AllTimeService], (service: AllTimeService) => {
    expect(service).toBeTruthy();
  }));
});
