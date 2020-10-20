import { TestBed } from '@angular/core/testing';

import { Modulo1Filho1deactivateServiceService } from './modulo1-filho1deactivate-service.service';

describe('Modulo1Filho1deactivateServiceService', () => {
  let service: Modulo1Filho1deactivateServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Modulo1Filho1deactivateServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
