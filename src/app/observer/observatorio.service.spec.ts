import { TestBed } from '@angular/core/testing';

import { ObservatorioService } from './observatorio.service';

describe('ObservatorioService', () => {
  let service: ObservatorioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObservatorioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
