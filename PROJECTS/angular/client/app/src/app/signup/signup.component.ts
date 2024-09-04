  import { Component } from '@angular/core';
  import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
  import { HttpClient } from '@angular/common/http';
  import { CommonModule } from '@angular/common';
  import { SignupService } from '../services/signup.services'; // Import the service

  @Component({
    selector: 'app-sign-up',
    standalone: true,
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css'],
    imports: [ReactiveFormsModule, CommonModule]
  })
  export class SignupComponent {
    signUpForm: FormGroup;
    adminData: any = null;
    passwordsMismatch = false;

    constructor(private fb: FormBuilder, private signupService: SignupService) {
      this.signUpForm = this.fb.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['', Validators.required]
      });
    }

    get formControls() {
      return this.signUpForm.controls;
    }

    onSubmit() {
      if (this.signUpForm.valid) {
        const { name, email, password, confirmPassword } = this.signUpForm.value;

        if (password !== confirmPassword) {
          this.passwordsMismatch = true;
          return;
        }

        this.passwordsMismatch = false;

        // Use the service to send the data to the backend
        this.signupService.addAdmin({ name, email, password }).subscribe(
          (response: any) => {
            window.alert("Admin added succesfully");
            this.adminData = response.admin;
            this.signUpForm.reset();
          },
          (error:any) => {
            console.error('Error:', error);
          }
        );
      }
    }
  }
