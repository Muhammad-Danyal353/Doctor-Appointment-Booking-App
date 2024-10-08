import { inject, Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    private authService = inject(AuthService)
    private router = inject(Router)
  canActivate(): boolean {
    if(this.authService.isLoggedIn()){
        return true;
    }
    this.router.navigate(['/home']); // redirect to home page if not authenticated
    return false; 
  }
}
