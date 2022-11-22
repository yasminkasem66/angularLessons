import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestNgxComponent } from './test-ngx.component';

describe('TestNgxComponent', () => {
  let component: TestNgxComponent;
  let fixture: ComponentFixture<TestNgxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestNgxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestNgxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
