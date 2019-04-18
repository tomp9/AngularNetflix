import { TestBed } from '@angular/core/testing';

import { PeliculashttpService } from './peliculashttp.service';

describe('PeliculashttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PeliculashttpService = TestBed.get(PeliculashttpService);
    expect(service).toBeTruthy();
  });
});
