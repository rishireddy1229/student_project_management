import { TestBed } from '@angular/core/testing';

import { LoginsuService } from './loginsu.service';

describe('LoginsuService', () => {
  let service: LoginsuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginsuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
