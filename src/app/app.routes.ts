import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { AppointmentListComponent } from './Pages/appointment-list/appointment-list.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';
import { PatientListComponent } from './Pages/patient-list/patient-list.component';
import { HospitalFormComponent } from './Pages/hospital-form/hospital-form.component';
import { HospitalListComponent } from './Pages/hospital-list/hospital-list.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'appointments', component: AppointmentListComponent },
  { path: 'patients', component: PatientListComponent },
  { path: 'hospitals', component: HospitalListComponent },
  { path: 'new-hospital', component: HospitalFormComponent },
];

// export class PreloadSelectedModulesList implements PreloadingStrategy {
//   preload(route: Route, load: Function): Observable<any> {
//     return route.data && route.data['preload'] ? load() : of(null);
//   }
// }
