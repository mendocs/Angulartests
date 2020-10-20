import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Observador2Component } from './observador2.component';

describe('Observador2Component', () => {
  let component: Observador2Component;
  let fixture: ComponentFixture<Observador2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Observador2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Observador2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
