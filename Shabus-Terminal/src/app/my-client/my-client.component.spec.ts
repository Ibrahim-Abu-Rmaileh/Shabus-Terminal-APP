/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyClientComponent } from './my-client.component';

describe('MyClientComponent', () => {
  let component: MyClientComponent;
  let fixture: ComponentFixture<MyClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
