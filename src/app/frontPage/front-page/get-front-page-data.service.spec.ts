import { TestBed } from '@angular/core/testing';

import { GetFrontPageDataService } from './get-front-page-data.service';

describe('GetFrontPageDataService', () => {
  let service: GetFrontPageDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetFrontPageDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
