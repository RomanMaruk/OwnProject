import { TestBed } from '@angular/core/testing';

import { SesignutilityServiceService } from './sesignutility-service.service';

describe('SesignutilityServiceService', () => {
  let service: SesignutilityServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SesignutilityServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
