import { TestBed } from '@angular/core/testing';

import { DesignutilityService } from './sesignutility-service.service';

describe('SesignutilityServiceService', () => {
  let service: DesignutilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DesignutilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
