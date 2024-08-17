import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  Appointments,
  Hospital,
  IApiResponese,
} from '../../Core/Interfaces/interfaces';
import { AppointmentService } from '../../Core/Services/appointment.service';
import { CommonModule } from '@angular/common';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
  selector: 'app-appointment-list',
  standalone: true,
  imports: [FormsModule, CommonModule, ProgressSpinnerModule],
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css',
})
export class AppointmentListComponent implements OnInit {
  AppointmentObj: Appointments = new Appointments();
  appointmentList: Appointments[] = [];
  isLoading: boolean = true;
  LoggedHospitalData!: Hospital;
  isShowAllAppointments: boolean = false;
  constructor(private service: AppointmentService) {
    const hospitalObj = localStorage.getItem('practoLogin');
    if (hospitalObj) {
      this.AppointmentObj.hospitalId = JSON.parse(hospitalObj).hospitalId;
      this.AppointmentObj.hospitalName = JSON.parse(hospitalObj).hospitalName;
      this.LoggedHospitalData = JSON.parse(hospitalObj).hospitalId;
      // this.getAppointmentsBYHospitalId(this.AppointmentObj.hospitalId);
      // this.getAllApointments();
    }
  }
  ngOnInit(): void {
    if (this.LoggedHospitalData.userName == 'superadmin') {
      this.getAllApointments();
    } else {
      this.getAppointmentsBYHospitalId(this.AppointmentObj.hospitalId);
    }
  }
  AddAppointment() {
    this.service
      .AddNewAppoinment(this.AppointmentObj)
      .subscribe((res: IApiResponese) => {
        if (res.result) {
          alert('Appointment added successfully');
          this.getAppointmentsBYHospitalId(this.AppointmentObj.hospitalId);
        } else {
          alert(res.message);
        }
      });
  }
  getAppointmentsBYHospitalId(id: number) {
    this.isLoading = true;
    this.isShowAllAppointments = false
    this.service.getAppintmentsById(id).subscribe((res: IApiResponese) => {
      if (res.result) {
        this.isLoading = false;
        this.appointmentList = res.data;
      } else {
        alert(res.message);
        this.isLoading = false;
      }
    });
  }
  getAllApointments() {
    this.isLoading = true;
    this.isShowAllAppointments = true
    this.service.getAllApointments().subscribe((res: IApiResponese) => {
      if (res.result) {
        this.isLoading = false;
        this.appointmentList = res.data;
      } else {
        alert(res.message);
        this.isLoading = false;
      }
    });
  }
}
