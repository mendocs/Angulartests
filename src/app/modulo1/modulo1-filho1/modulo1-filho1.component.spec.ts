import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Modulo1Filho1Component } from './modulo1-filho1.component';

describe('Modulo1Filho1Component', () => {
  let component: Modulo1Filho1Component;
  let fixture: ComponentFixture<Modulo1Filho1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Modulo1Filho1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Modulo1Filho1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
