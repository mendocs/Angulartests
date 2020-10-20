import { TestBed } from '@angular/core/testing';

import { Modulo1Filho1CanActivateService } from './modulo1-filho1-can-activate.service';

describe('Modulo1Filho1CanActivateService', () => {
  let service: Modulo1Filho1CanActivateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Modulo1Filho1CanActivateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
