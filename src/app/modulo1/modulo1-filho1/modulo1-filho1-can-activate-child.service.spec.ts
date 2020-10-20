import { TestBed } from '@angular/core/testing';

import { Modulo1Filho1CanActivateChildService } from './modulo1-filho1-can-activate-child.service';

describe('Modulo1Filho1CanActivateChildService', () => {
  let service: Modulo1Filho1CanActivateChildService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Modulo1Filho1CanActivateChildService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
