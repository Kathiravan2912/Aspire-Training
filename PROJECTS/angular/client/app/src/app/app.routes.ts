import { EmployeesComponent } from './employees/employees.component';
import { CustomersComponent } from './customers/customers.component';
import { EventsComponent } from './events/events.component';
import { AwardsComponent } from './awards/awards.component';
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ManagementComponent } from './management/management.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuard } from './auth.guard'; 

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },

  {
    path: 'management',
    component: ManagementComponent,
    canActivate: [AuthGuard],  
    children: [
      { path: '', redirectTo: 'employees', pathMatch: 'full' },
      { path: 'employees', component: EmployeesComponent },
      { path: 'customers', component: CustomersComponent },
      { path: 'events', component: EventsComponent },
      { path: 'awards', component: AwardsComponent },
      { path: 'signup', component: SignupComponent },
    ],
  },
  { path: '**', redirectTo: 'login' },
  
];


