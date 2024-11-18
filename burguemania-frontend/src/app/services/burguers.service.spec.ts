import { TestBed } from '@angular/core/testing';

import { BurguersService } from './burguers.service';

describe('BurguersService', () => {
  let service: BurguersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BurguersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
