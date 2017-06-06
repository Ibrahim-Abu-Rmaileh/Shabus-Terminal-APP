/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyDriverLoginComponent } from './my-driver-login.component';

describe('MyDriverLoginComponent', () => {
  let component: MyDriverLoginComponent;
  let fixture: ComponentFixture<MyDriverLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDriverLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDriverLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
