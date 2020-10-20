import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRemoveFilhoComponent } from './add-remove-filho.component';

describe('AddRemoveFilhoComponent', () => {
  let component: AddRemoveFilhoComponent;
  let fixture: ComponentFixture<AddRemoveFilhoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRemoveFilhoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRemoveFilhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
