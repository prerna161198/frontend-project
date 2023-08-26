import { TestBed } from '@angular/core/testing';

import { AdvertisementserviceService } from './advertisementservice.service';

describe('AdvertisementserviceService', () => {
  let service: AdvertisementserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdvertisementserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
