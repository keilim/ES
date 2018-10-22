import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsUiComponent } from './es-ui.component';

describe('EsUiComponent', () => {
  let component: EsUiComponent;
  let fixture: ComponentFixture<EsUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
