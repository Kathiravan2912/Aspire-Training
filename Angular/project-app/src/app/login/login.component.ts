// login.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    // Perform login logic here (e.g., send request to server)
    // For simplicity, let's assume login is successful
    this.router.navigate(['/home']);
  }

}
