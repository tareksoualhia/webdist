import { TestBed } from '@angular/core/testing';

import { MaisonhoteService } from './maisonhote.service';

describe('MaisonhoteService', () => {
  let service: MaisonhoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaisonhoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
