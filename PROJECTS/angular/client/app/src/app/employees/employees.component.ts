import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  ReactiveFormsModule,
  FormGroup,
  Validators,
} from '@angular/forms';
import { EmployeeService } from '../services/employee.services';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule, FormsModule],
  providers: [EmployeeService]
})
export class EmployeesComponent {
  showForm: boolean = false;
  employeeForm: FormGroup;
  employees: any[] = []; // Array to hold employee data
  filteredEmployees: any[] = []; // Array for filtered data
  searchQuery: string = ''; // Variable for search query
  formSubmitAttempt: boolean = false;
  editingEmployee: any;
  searchTerm: any;

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService
  ) {
    this.employeeForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      contactNumber: [
        '',
        [Validators.required, Validators.pattern(/^\d{10}$/)],
      ],
      position: ['', [Validators.required]],
      salary: ['', [Validators.required, Validators.min(0)]],
      address: ['', [Validators.required]],
    });
  }

  ngOnInit() {
    this.getEmployees(); // Fetch employee data when the component initializes
  }

  toggleForm() {
    this.showForm = !this.showForm;
    // If the form is being closed, reset the form
    if (!this.showForm) {
      this.resetForm();
    }
  }

  resetForm() {
    this.employeeForm.reset(); // Reset form fields
    this.formSubmitAttempt = false; // Reset submission attempt flag
    this.editingEmployee = null; // Reset the editingEmployee to null
  }

  // Method to fetch employees from the database
  getEmployees() {
    this.employeeService.getEmployees().subscribe(
      (response: any) => {
        this.employees = response; // Store the fetched data in the employees array
        this.filteredEmployees = [...this.employees]; // Initially display all employees
      },
      (error: any) => {
        console.error('Error fetching employee data:', error);
      }
    );
  }
  // Handle form submission
  onSubmit() {
    this.formSubmitAttempt = true;

    if (this.employeeForm.valid) {
      if (this.editingEmployee) {
        // Update existing employee
        this.employeeService
          .updateEmployee(this.editingEmployee._id, this.employeeForm.value)
          .subscribe(
            (response: any) => {
              console.log('Employee updated successfully:', response);
              this.showForm = false;
              this.resetForm();
              this.getEmployees(); // Refresh the list
            },
            (error: any) => {
              console.error('Error updating employee:', error);
            }
          );
      } else {
        // Add new employee
        this.employeeService.addEmployee(this.employeeForm.value).subscribe(
          (response: any) => {
            console.log('Employee added successfully:', response);
            this.showForm = false;
            this.resetForm();
            this.getEmployees(); // Refresh the list
          },
          (error: any) => {
            console.error('Error adding employee:', error);
          }
        );
      }
    } else {
      Object.keys(this.employeeForm.controls).forEach((field) => {
        const control = this.employeeForm.get(field);
        control?.markAsTouched({ onlySelf: true });
      });
    }
  }
  onEdit(employee: any) {
    this.editingEmployee = employee;
    this.showForm = true;

    // Populate the form with the employee data
    this.employeeForm.patchValue({
      name: employee.name,
      email: employee.email,
      contactNumber: employee.contactNumber,
      position: employee.position,
      salary: employee.salary,
      address: employee.address,
    });
  }

  // Handle delete action
  onDelete(employeeId: string) {
    if (confirm('Are you sure you want to delete this employee?')) {
      this.employeeService.deleteEmployee(employeeId).subscribe(
        (response: any) => {
          console.log('Employee deleted successfully:', response);
          this.getEmployees(); // Refresh the list
        },
        (error: any) => {
          console.error('Error deleting employee:', error);
        }
      );
    }
  }
  // Method to filter employees based on search input
  // filterEmployees() {
  //     const query = this.searchQuery.toLowerCase();
  //     this.filteredEmployees = this.employees.filter(
  //       (employee) =>
  //         employee.name.toLowerCase().includes(query) ||
  //         employee.email.toLowerCase().includes(query) ||
  //         employee.contactNumber.includes(query) ||
  //         employee.position.toLowerCase().includes(query) ||
  //         employee.salary.toString().includes(query) ||
  //         employee.address.toLowerCase().includes(query)
  //     );
  //   }
  // Method to filter employees based on search input
  filterEmployees() {
    const query = this.searchQuery.toLowerCase();

    // If the search query is empty, show all employees
    if (!query) {
      this.filteredEmployees = [...this.employees];
    } else {
      // Otherwise, filter based on the search criteria
      this.filteredEmployees = this.employees.filter(
        (employee) =>
          employee.name.toLowerCase().includes(query) ||
          employee.email.toLowerCase().includes(query) ||
          employee.contactNumber.includes(query) ||
          employee.position.toLowerCase().includes(query) ||
          employee.salary.toString().includes(query) ||
          employee.address.toLowerCase().includes(query)
      );
    }
  }

  get formControls() {
    return this.employeeForm.controls;
  }
}
