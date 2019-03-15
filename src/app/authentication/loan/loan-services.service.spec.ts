import { TestBed } from '@angular/core/testing';

import { LoanServicesService } from './loan-services.service';

describe('LoanServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoanServicesService = TestBed.get(LoanServicesService);
    expect(service).toBeTruthy();
  });
});
