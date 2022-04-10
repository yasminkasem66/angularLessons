import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise1Component } from './exercise1.component';

describe('Exercise1Component', () => {
  let component: Exercise1Component;
  let fixture: ComponentFixture<Exercise1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exercise1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Exercise1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
