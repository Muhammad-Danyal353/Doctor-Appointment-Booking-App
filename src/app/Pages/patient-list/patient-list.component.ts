import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import {
  Appointments,
  Hospital,
  IApiResponese,
  Patients,
} from '../../Core/Interfaces/interfaces';
import { AppointmentService } from '../../Core/Services/appointment.service';
import { PatientService } from '../../Core/Services/patient.service';

@Component({
  selector: 'app-patient-list',
  standalone: true,
  imports: [FormsModule, CommonModule, ProgressSpinnerModule],
  templateUrl: './patient-list.component.html',
  styleUrl: './patient-list.component.css',
})
export class PatientListComponent {
  PatientObj: Patients = new Patients();
  PatientList: Patients[] = [];
  isLoading: boolean = true;
  LoggedHospitalData!: Hospital;
  isShowAllPatients: boolean = false;
  constructor(private service: PatientService) {
    const hospitalObj = localStorage.getItem('practoLogin');
    if (hospitalObj) {
      this.PatientObj.hospitalId = JSON.parse(hospitalObj).hospitalId;
      this.PatientObj.hospitalName = JSON.parse(hospitalObj).hospitalName;
      this.LoggedHospitalData = JSON.parse(hospitalObj).hospitalId;
      // this.getAppointmentsBYHospitalId(this.PatientObj.hospitalId);
      // this.getAllApointments();
    }
  }
  ngOnInit(): void {
    if (this.LoggedHospitalData.userName == 'superadmin') {
      this.getAllPatients();
    } else {
      this.getPatientsBYHospitalId(this.PatientObj.hospitalId);
    }
  }
  AddPatient() {
    this.service
      .AddNewPatient(this.PatientObj)
      .subscribe((res: IApiResponese) => {
        if (res.result) {
          alert('Patient added successfully');
          this.getPatientsBYHospitalId(this.PatientObj.hospitalId);
        } else {
          alert(res.message);
        }
      });
  }
  getPatientsBYHospitalId(id: number) {
    this.isLoading = true;
    this.isShowAllPatients = false;
    this.service.getPatientsById(id).subscribe((res: IApiResponese) => {
      if (res.result) {
        this.isLoading = false;
        this.PatientList = res.data;
      } else {
        alert(res.message);
        this.isLoading = false;
      }
    });
  }
  getAllPatients() {
    this.isLoading = true;
    this.isShowAllPatients = true;
    this.service.getAllPatients().subscribe((res: IApiResponese) => {
      if (res.result) {
        this.isLoading = false;
        this.PatientList = res.data;
      } else {
        alert(res.message);
        this.isLoading = false;
      }
    });
  }
}
