import { TestBed } from '@angular/core/testing';

import { PredictWhiteLabelApiService } from './predict-white-label-api.service';

describe('PredictWhiteLabelApiService', () => {
  let service: PredictWhiteLabelApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PredictWhiteLabelApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
