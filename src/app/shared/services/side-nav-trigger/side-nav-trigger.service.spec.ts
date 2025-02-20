import { TestBed } from '@angular/core/testing';

import { SideNavTriggerService } from './side-nav-trigger.service';

describe('MenuTriggerService', () => {
  let service: SideNavTriggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SideNavTriggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
