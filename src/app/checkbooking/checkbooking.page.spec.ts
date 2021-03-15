import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckbookingPage } from './checkbooking.page';

describe('CheckbookingPage', () => {
  let component: CheckbookingPage;
  let fixture: ComponentFixture<CheckbookingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckbookingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckbookingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
