import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IputFieldComponent } from './iput-field.component';

describe('IputFieldComponent', () => {
  let component: IputFieldComponent;
  let fixture: ComponentFixture<IputFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IputFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IputFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
