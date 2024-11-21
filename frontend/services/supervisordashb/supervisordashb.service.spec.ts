import { TestBed } from '@angular/core/testing';

import { SupervisordashbService } from './supervisordashb.service';

describe('SupervisordashbService', () => {
  let service: SupervisordashbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupervisordashbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
