import { Component, Inject, inject, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { Hospital, IApiResponese, User } from './Core/Interfaces/interfaces';
import { FormsModule } from '@angular/forms';
import { HospitalService } from './Core/Services/hospital.service';
import { ButtonModule } from 'primeng/button';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    FormsModule,
    ButtonModule,
    ProgressSpinnerModule,
    RouterLink,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  // router: Router = Inject(Router);
  constructor(public router: Router) {}
  ngOnInit(): void {
    const StorageData = localStorage.getItem('practoLogin');
    if (StorageData) {
      this.HospitalObj = JSON.parse(StorageData);
    }
  }
  isLoading: boolean = false;
  UserObj: User = new User('vendant ', '113322');

  HospitalObj: Hospital = new Hospital();
  HospitalService: HospitalService = inject(HospitalService);
  ShowLogin() {
    const modal = document.getElementById('LoginModal');
    if (modal != null) {
      modal.style.display = 'block';
    }
  }
  CloseLogin() {
    const modal = document.getElementById('LoginModal');
    if (modal != null) {
      modal.style.display = 'none';
    }
  }
  Login() {
    this.isLoading = true;
    this.HospitalService.Login(this.UserObj).subscribe({
      next: (res: IApiResponese) => {
        if (res.result) {
          this.HospitalObj = res.data;
          this.isLoading = false;
          localStorage.setItem('practoLogin', JSON.stringify(res.data));
          this.CloseLogin();
        } else {
          alert(res.message);
          this.isLoading = false;
        }
      },
      error: (err) => {
        console.error(err);
        alert('An error occurred while processing your request');
        this.isLoading = false;
      },
    });
  }
  LogOut() {
    localStorage.removeItem('practoLogin');
    this.HospitalObj = new Hospital();
    this.router.navigateByUrl('/home');
  }
}
