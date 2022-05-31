import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripsPage } from './trips.page';

describe('TripsPage', () => {
  let component: TripsPage;
  let fixture: ComponentFixture<TripsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripsPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TripsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
