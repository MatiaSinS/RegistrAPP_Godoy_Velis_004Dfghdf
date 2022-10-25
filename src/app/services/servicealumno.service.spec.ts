import { TestBed } from '@angular/core/testing';

import { ServicealumnoService } from './servicealumno.service';

describe('ServicealumnoService', () => {
  let service: ServicealumnoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicealumnoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
