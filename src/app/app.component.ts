import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
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
}
