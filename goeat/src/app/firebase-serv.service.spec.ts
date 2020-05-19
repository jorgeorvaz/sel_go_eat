import { TestBed } from '@angular/core/testing';

import { FirebaseServService } from './firebase-serv.service';

describe('FirebaseServService', () => {
  let service: FirebaseServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebaseServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
