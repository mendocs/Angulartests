import { TestBed } from '@angular/core/testing';

import { AddremoveService } from './addremove.service';

describe('AddremoveService', () => {
  let service: AddremoveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddremoveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
