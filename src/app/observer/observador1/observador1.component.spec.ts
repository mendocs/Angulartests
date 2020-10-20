import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Observador1Component } from './observador1.component';

describe('Observador1Component', () => {
  let component: Observador1Component;
  let fixture: ComponentFixture<Observador1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Observador1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Observador1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
