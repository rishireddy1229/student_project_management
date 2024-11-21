import { TestBed } from '@angular/core/testing';

import { LoginstService } from './loginst.service';

describe('LoginstService', () => {
  let service: LoginstService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginstService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
