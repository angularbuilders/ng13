import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTripPage } from './new-trip.page';

describe('NewTripPage', () => {
  let component: NewTripPage;
  let fixture: ComponentFixture<NewTripPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTripPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTripPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
