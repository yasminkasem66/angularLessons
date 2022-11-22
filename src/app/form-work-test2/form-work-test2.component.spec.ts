import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormWorkTest2Component } from './form-work-test2.component';

describe('FormWorkTest2Component', () => {
  let component: FormWorkTest2Component;
  let fixture: ComponentFixture<FormWorkTest2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormWorkTest2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormWorkTest2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
