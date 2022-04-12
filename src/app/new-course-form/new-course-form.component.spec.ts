import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCourseFOrmComponent } from './new-course-form.component';

describe('NewCourseFOrmComponent', () => {
  let component: NewCourseFOrmComponent;
  let fixture: ComponentFixture<NewCourseFOrmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCourseFOrmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCourseFOrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
