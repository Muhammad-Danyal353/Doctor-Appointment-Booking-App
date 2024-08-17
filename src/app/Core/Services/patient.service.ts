import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Constants } from '../Constants/constants';
import { IApiResponese, Patients } from '../Interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  constructor(private http: HttpClient) {}
  AddNewPatient(body: Patients): Observable<IApiResponese> {
    return this.http.post<IApiResponese>(
      environment.baseUrl + Constants.API_END_POINT.ADD_PATIENT,
      body
    );
  }
  getPatientsById(id: number) {
    return this.http.get<IApiResponese>(
      environment.baseUrl +
        Constants.API_END_POINT.GET_PATIENT_BY_HOSPITAL_ID +
        id
    );
  }
  getAllPatients() {
    return this.http.get<IApiResponese>(
      environment.baseUrl + Constants.API_END_POINT.GET_ALL_PATIENTS
    );
  }
}
