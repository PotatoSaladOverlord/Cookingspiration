import { TestBed } from '@angular/core/testing';

import { ServiceRecettesService } from './service-recettes.service';

describe('ServiceRecettesService', () => {
  let service: ServiceRecettesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceRecettesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
