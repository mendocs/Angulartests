import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Modulo1Filho1DetalheComponent } from './modulo1-filho1-detalhe.component';

describe('Modulo1Filho1DetalheComponent', () => {
  let component: Modulo1Filho1DetalheComponent;
  let fixture: ComponentFixture<Modulo1Filho1DetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Modulo1Filho1DetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Modulo1Filho1DetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
