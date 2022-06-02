import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyView } from './agency.view';

describe('AgencyView', () => {
  let component: AgencyView;
  let fixture: ComponentFixture<AgencyView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgencyView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgencyView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
