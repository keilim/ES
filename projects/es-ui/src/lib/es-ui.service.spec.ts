import { TestBed } from '@angular/core/testing';

import { EsUiService } from './es-ui.service';

describe('EsUiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EsUiService = TestBed.get(EsUiService);
    expect(service).toBeTruthy();
  });
});
