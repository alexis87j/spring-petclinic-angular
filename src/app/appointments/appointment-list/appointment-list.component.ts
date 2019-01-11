/*
 *
 *  * Copyright 2016-2018 the original author or authors.
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

/**
 * @author Vitaliy Fedoriv
 */

import {Component, OnInit} from '@angular/core';
import {Appointment} from '../appointment';
import {AppointmentService} from '../appointment.service';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {

  errorMessage: string;
  no_appoinments = false;
  appointments: Appointment[] = [{owner: 'Testowner',
  petname: 'Testtier',
  pettype: 'Testtype',
  date: '2016-09-07',
  description: 'test'}];

  constructor(private appointmentService: AppointmentService) {
    this.appointments = [];
  }

  ngOnInit() {
    this.appointmentService.getAppointments().subscribe(
      appoinments => this.appointments = appoinments,
      error => this.errorMessage = <any> error);
  }
}
