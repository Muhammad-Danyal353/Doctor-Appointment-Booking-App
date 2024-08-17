import { Component, inject, OnDestroy } from '@angular/core';
import { Hospital, IApiResponese } from '../../Core/Interfaces/interfaces';
import { FormsModule } from '@angular/forms';
import { HospitalService } from '../../Core/Services/hospital.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-hospital-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './hospital-form.component.html',
  styleUrl: './hospital-form.component.css',
})
export class HospitalFormComponent {
  hospitalObj: Hospital = new Hospital();
  HospitalService: HospitalService = inject(HospitalService);
  subscription!: Subscription;
  RegHospital() {
    this.HospitalService.AddNewHostpital(this.hospitalObj).subscribe({
      next: (res: IApiResponese) => {
        if (res.result) {
          alert('Hospital Registered successfully');
          this.hospitalObj = new Hospital();
        } else {
          alert(res.message);
        }
      },
    });
  }
}
