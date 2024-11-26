import { TestBed } from '@angular/core/testing';

import { MessagesFirebaseService } from './messages-firebase.service';

describe('MessagesFirebaseService', () => {
  let service: MessagesFirebaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessagesFirebaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
