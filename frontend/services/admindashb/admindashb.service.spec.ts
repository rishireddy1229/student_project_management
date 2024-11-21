import { TestBed } from '@angular/core/testing';

import { AdmindashbService } from './admindashb.service';

describe('AdmindashbService', () => {
  let service: AdmindashbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdmindashbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
