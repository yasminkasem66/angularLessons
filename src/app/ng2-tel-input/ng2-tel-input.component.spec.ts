import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng2TelInputComponent } from './ng2-tel-input.component';

describe('Ng2TelInputComponent', () => {
  let component: Ng2TelInputComponent;
  let fixture: ComponentFixture<Ng2TelInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ng2TelInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng2TelInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
