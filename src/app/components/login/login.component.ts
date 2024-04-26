import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RegisterComponent,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router: Router) {}

  navigateToRegister() {
    this.router.navigate(['/register']);
  }
}
