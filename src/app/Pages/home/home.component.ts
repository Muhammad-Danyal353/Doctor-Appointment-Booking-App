import { Component } from '@angular/core';
import { HospitalFormComponent } from '../hospital-form/hospital-form.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HospitalFormComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
