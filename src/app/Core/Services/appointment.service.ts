import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Constants } from '../Constants/constants';
import {
  IHospital,
  IApiResponese,
  Appointments,
} from '../Interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  constructor(private http: HttpClient) {}
  AddNewAppoinment(body: Appointments): Observable<IApiResponese> {
    return this.http.post<IApiResponese>(
      environment.baseUrl + Constants.API_END_POINT.ADD_APPOINTMENTS,
      body
    );
  }
  getAppintmentsById(id: number) {
    return this.http.get<IApiResponese>(
      environment.baseUrl +
        Constants.API_END_POINT.GET_APPOINTMENTS_BY_HOSPITAL_ID +
        id
    );
  }
  getAllApointments() {
    return this.http.get<IApiResponese>(
      environment.baseUrl + Constants.API_END_POINT.GET_ALL_APPOINTMENTS
    );
  }
}
