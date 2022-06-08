import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripView } from './trip.view';

describe('TripView', () => {
  let component: TripView;
  let fixture: ComponentFixture<TripView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TripView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
