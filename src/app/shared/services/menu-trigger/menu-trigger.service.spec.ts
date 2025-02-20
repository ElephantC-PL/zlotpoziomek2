import { TestBed } from '@angular/core/testing';

import { MenuTriggerService } from './menu-trigger.service';

describe('MenuTriggerService', () => {
  let service: MenuTriggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuTriggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
