import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HandleError, HttpErrorHandler} from '../error.service';
import {Appointment} from './appointment';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AppointmentService {

  private entity_url = environment.REST_API_URL + 'appointments';
  private handlerError: HandleError;

  constructor(private http: HttpClient, private httpErrorHandler: HttpErrorHandler) {
    this.handlerError = httpErrorHandler.createHandleError('AppointmentService');
  }

  getAppointments(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(this.entity_url)
      .pipe(
        catchError(this.handlerError('getAppointments', []))
      );
  }
}
