import { TestBed, inject } from '@angular/core/testing';

import { SwRequestService } from './sw-request.service';

describe('SwRequestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SwRequestService]
    });
  });

  it('should be created', inject([SwRequestService], (service: SwRequestService) => {
    expect(service).toBeTruthy();
  }));
});
