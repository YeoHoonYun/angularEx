import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalPage } from './anal.page';

describe('AnalPage', () => {
  let component: AnalPage;
  let fixture: ComponentFixture<AnalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
