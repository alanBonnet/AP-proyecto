import { TestBed } from '@angular/core/testing';

import { PerfilSvService } from './perfil-sv.service';

describe('PerfilSvService', () => {
  let service: PerfilSvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerfilSvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
