import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Disparador2Component } from './disparador2.component';

describe('Disparador2Component', () => {
  let component: Disparador2Component;
  let fixture: ComponentFixture<Disparador2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Disparador2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Disparador2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
