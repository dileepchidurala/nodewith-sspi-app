import { TestBed, inject } from '@angular/core/testing';

import { KeralafundsserviceService } from './keralafundsservice.service';

describe('KeralafundsserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KeralafundsserviceService]
    });
  });

  it('should be created', inject([KeralafundsserviceService], (service: KeralafundsserviceService) => {
    expect(service).toBeTruthy();
  }));
});
