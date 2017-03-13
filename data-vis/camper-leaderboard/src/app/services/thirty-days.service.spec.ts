import { TestBed, inject } from '@angular/core/testing';

import { ThirtyDaysService } from './thirty-days.service';

describe('ThirtyDaysService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ThirtyDaysService]
    });
  });

  it('should ...', inject([ThirtyDaysService], (service: ThirtyDaysService) => {
    expect(service).toBeTruthy();
  }));
});
