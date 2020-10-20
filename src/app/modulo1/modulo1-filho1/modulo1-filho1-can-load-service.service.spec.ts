import { TestBed } from '@angular/core/testing';

import { Modulo1Filho1CanLoadServiceService } from './modulo1-filho1-can-load-service.service';

describe('Modulo1Filho1CanLoadServiceService', () => {
  let service: Modulo1Filho1CanLoadServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Modulo1Filho1CanLoadServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
