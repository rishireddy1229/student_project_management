import { TestBed } from '@angular/core/testing';

import { StudentdashbService } from './studentdashb.service';

describe('StudentdashbService', () => {
  let service: StudentdashbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentdashbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
