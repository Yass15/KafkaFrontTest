import { TestBed } from '@angular/core/testing';

import { NotifService } from './notif.service';

describe('NotifServiceService', () => {
  let service: NotifService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotifService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
