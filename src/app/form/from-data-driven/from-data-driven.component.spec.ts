import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FromDataDrivenComponent } from './from-data-driven.component';

describe('FromDataDrivenComponent', () => {
  let component: FromDataDrivenComponent;
  let fixture: ComponentFixture<FromDataDrivenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FromDataDrivenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FromDataDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
