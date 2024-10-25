import { TestBed } from '@angular/core/testing';

import { RegistroventaService } from './registroventa.service';

describe('RegistroventaService', () => {
  let service: RegistroventaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistroventaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
