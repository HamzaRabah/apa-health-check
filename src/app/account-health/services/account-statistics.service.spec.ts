import { TestBed } from '@angular/core/testing';

import { AccountStatisticsService } from './account-statistics.service';

describe('AccountStatisticsService', () => {
  let service: AccountStatisticsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountStatisticsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
