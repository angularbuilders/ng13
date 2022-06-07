import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTripForm } from './new-trip.form';

describe('NewTripForm', () => {
  let component: NewTripForm;
  let fixture: ComponentFixture<NewTripForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTripForm ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTripForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
