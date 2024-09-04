import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../services/login.services';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule, CommonModule],
})
export class LoginComponent {
  [x: string]: any;
  onSubmit() {
    throw new Error('Method not implemented.');
  }
  name = '';
  password = '';
  errorMessage = '';
  loginForm: any;
  formControls: any;
  showLoginForm: boolean = false;

  toggleLogin() {
    this.showLoginForm = !this.showLoginForm;
  }

  constructor(private router: Router, private loginService: LoginService) {}

  // onLogin() {
  //   // Check if name and password fields are not empty
  //    if (this.name.trim() !== '' && this.password.trim() !== '') {
  //     this.loginService.login(this.name, this.password).subscribe({
  //       next: (response: any) => {
  //         // Handle successful login, store token and navigate
  //         localStorage.setItem('token', response.token);
  //         this.router.navigate(['/management/employees']);
  //       },
  //       error: (error: any) => {
  //         if (this.name === '') {
  //           this.errorMessage = 'Username required!';
  //         } else if (error.status === 401) {
  //           this.errorMessage = 'Incorrect password.';
  //         } else if (error.status === 404) {
  //           this.errorMessage = 'User not found. Please check your username.';
  //         } else {
  //           this.errorMessage = 'Something happened.';
  //         }
  //       },
  //     });
  //   } else {
  //     this.errorMessage = 'Username and Password are required';
  //   }
  // }
  onLogin() {
    // Check if name and password fields are not empty
    if (this.name.trim() !== '' && this.password.trim() !== '') {
      this.loginService.login(this.name, this.password).toPromise()
        .then((response: any) => {
          // Handle successful login, store token and navigate
          localStorage.setItem('token', response.token);
          this.router.navigate(['/management/employees']);
        })
        .catch((error: any) => {
          if (this.name === '') {
            this.errorMessage = 'Username required!';
          } else if (error.status === 401) {
            this.errorMessage = 'Incorrect password.';
          } else if (error.status === 404) {
            this.errorMessage = 'User not found. Please check your username.';
          } else {
            this.errorMessage = 'Password is incorrect!.';
          }
        });
    } else {
      this.errorMessage = 'Username and Password are required';
    }
  }
  
}
