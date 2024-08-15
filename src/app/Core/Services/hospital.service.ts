import { Inject, Injectable } from '@angular/core';
import { IApiResponese, IHospital } from '../Interfaces/interfaces';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Constants } from '../Contants/contants';

@Injectable({
  providedIn: 'root',
})
export class HospitalService {
  // http: HttpClient = Inject(HttpClient);
  constructor(private http: HttpClient) {}
  AddNewHostpital(body: IHospital): Observable<IApiResponese> {
    return this.http.post<IApiResponese>(
      environment.baseUrl + Constants.API_END_POINT.ADD_NEW_HOSPITAL,
      body
    );
  }
}
