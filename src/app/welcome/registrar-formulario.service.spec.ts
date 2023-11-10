import { TestBed } from '@angular/core/testing';

import { RegistrarFormularioService } from './registrar-formulario.service';

describe('RegistrarFormularioService', () => {
  let service: RegistrarFormularioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistrarFormularioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
