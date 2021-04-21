import { TestBed } from '@angular/core/testing';

import { ImageNotifyService } from './image-notify.service';

describe('ImageNotifyService', () => {
  let service: ImageNotifyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageNotifyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
