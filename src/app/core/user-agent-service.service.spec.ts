import { TestBed } from '@angular/core/testing';

import { UserAgentService } from './user-agent.service';

describe('UserAgentServiceService', () => {
  let service: UserAgentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserAgentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
