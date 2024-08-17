import { provideRouter, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { AppointmentListComponent } from './Pages/appointment-list/appointment-list.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';
import { PatientListComponent } from './Pages/patient-list/patient-list.component';
import { HospitalFormComponent } from './Pages/hospital-form/hospital-form.component';
import { HospitalListComponent } from './Pages/hospital-list/hospital-list.component';
import { AuthGuard } from './Core/Services/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'appointments',
    component: AppointmentListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'patients',
    component: PatientListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'hospitals',
    component: HospitalListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'new-hospital',
    component: HospitalFormComponent,
    canActivate: [AuthGuard],
  },
  { path: '**', redirectTo: '/home' },
];

// export const APP_ROUTES = provideRouter(routes);
// export class PreloadSelectedModulesList implements PreloadingStrategy {
//   preload(route: Route, load: Function): Observable<any> {
//     return route.data && route.data['preload'] ? load() : of(null);
//   }
// }
