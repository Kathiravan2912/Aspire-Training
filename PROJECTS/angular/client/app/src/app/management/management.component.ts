import { Component } from '@angular/core';
import { Router, RouterModule, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-management',
  standalone: true,
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css'],
  imports: [RouterModule, CommonModule, MatIconModule]
})
export class ManagementComponent {
  activeOption: string = '';

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const currentRoute = event.urlAfterRedirects.split('/').pop();
        this.activeOption = currentRoute || '';
      }
    });
  }

  navigateTo(path: string) {
    this.router.navigate([`/management/${path}`]);
  }

  // logout() {
  //   this.router.navigate(['/login']);
  // }
  logout() {
    // Clear the JWT token from localStorage
    localStorage.removeItem('token');

    // Redirect to the login page
    this.router.navigate(['/login']);
  }
}
