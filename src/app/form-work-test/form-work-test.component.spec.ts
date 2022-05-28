import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormWorkTestComponent } from './form-work-test.component';

describe('FormWorkTestComponent', () => {
  let component: FormWorkTestComponent;
  let fixture: ComponentFixture<FormWorkTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormWorkTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormWorkTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
