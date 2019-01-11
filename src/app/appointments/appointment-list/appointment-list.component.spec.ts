/*
 *
 *  * Copyright 2016-2017 the original author or authors.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *      http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *
 */

/* tslint:disable:no-unused-variable */

/**
 * @author Vitaliy Fedoriv
 */

import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import {AppointmentListComponent} from './appointment-list.component';
import {FormsModule} from '@angular/forms';
import {AppointmentService} from '../appointment.service';
import {Appointment} from '../appointment';
import {Observable} from 'rxjs';
import {of} from 'rxjs/index';

class AppointmentServiceStub {
  getAppointments(): Observable<Appointment[]> {
    return of([{owner: 'Testowner',
      petname: 'Testtier',
      pettype: 'Testtype',
      date: '2016-09-07',
      description: 'test'}]);
  }

}


fdescribe('SpecialtyListComponent', () => {
  let component: AppointmentListComponent;
  let fixture: ComponentFixture<AppointmentListComponent>;
  let response_status: number;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppointmentListComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [FormsModule],
      providers: [{provide: AppointmentService, useClass: AppointmentServiceStub}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentListComponent);
    component = fixture.componentInstance;


    response_status = 204; // success delete return NO_CONTENT

    fixture.detectChanges();
  });

  it('should create AppointmentComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should render 5 column header', () => {
    expect(fixture.debugElement.nativeElement.querySelectorAll('th').length).toBe(5);
  });

  it('should show first result in table', () => {
    expect(fixture.debugElement.nativeElement.querySelectorAll('td').length).toBe(5);
    expect(fixture.debugElement.nativeElement.querySelectorAll('td')[0].textContent).toEqual('Testowner');
    expect(fixture.debugElement.nativeElement.querySelectorAll('td')[1].textContent).toEqual('Testtier');
    expect(fixture.debugElement.nativeElement.querySelectorAll('td')[2].textContent).toEqual('Testtype');
    expect(fixture.debugElement.nativeElement.querySelectorAll('td')[3].textContent).toEqual('2016-09-07');
    expect(fixture.debugElement.nativeElement.querySelectorAll('td')[4].textContent).toEqual('test');
  });


});
