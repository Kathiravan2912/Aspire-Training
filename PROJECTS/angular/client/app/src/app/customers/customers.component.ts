// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
// import { CustomersService } from '../services/customer.services'; // Adjust the path as necessary
// import { CommonModule } from '@angular/common';
// import { HttpClientModule } from '@angular/common/http'; 
// import { FormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-customers',
//   templateUrl: './customers.component.html',
//   standalone: true,
//   imports: [ReactiveFormsModule, CommonModule,HttpClientModule, FormsModule],
//   styleUrls: ['./customers.component.css'],
//   providers: [CustomersService]
// })
// export class CustomersComponent {
//   customersForm: FormGroup;
//   isFormVisible = false;

//   constructor(private fb: FormBuilder, private customersService: CustomersService) {
//     this.customersForm = this.fb.group({
//       name: ['', Validators.required],
//       email: ['', [Validators.required, Validators.email]],
//       mobileNumber: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
//       accountNumber: ['', [Validators.required, Validators.pattern(/^[0-9]{12}$/)]],
//       address: ['', Validators.required]
//     });
//   }

//   showForm(): void {
//     this.isFormVisible = true;
//   }

//   closeForm(): void {
//     this.isFormVisible = false;
//   }

//   onSubmit(): void {
//     if (this.customersForm.valid) {
//       this.customersService.addCustomer(this.customersForm.value).subscribe((response:any) => {
//         console.log('Customer added successfully:', response);
//         this.closeForm(); // Close the form after submission
//       }, (error: any) => {
//         console.error('Error adding customer:', error);
//       });
//     }
//   }
// }


import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  ReactiveFormsModule,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CustomersService } from '../services/customer.services';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule, FormsModule],
  providers: [CustomersService],
})
export class CustomersComponent {
  showForm: boolean = false;
  customerForm: FormGroup;
  customers: any[] = []; // Array to hold customer data
  filteredCustomers: any[] = []; // Array for filtered data
  searchQuery: string = ''; // Variable for search query
  formSubmitAttempt: boolean = false;
  editingCustomer: any;

  constructor(
    private fb: FormBuilder,
    private customerService: CustomersService
  ) {
    this.customerForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      mobileNumber: [
        '',
        [Validators.required, Validators.pattern(/^\d{10}$/)],
      ],
      accountNumber: [
        '',
        [Validators.required, Validators.pattern(/^\d{12}$/)],
      ],
      address: ['', [Validators.required]],
    });
  }

  ngOnInit() {
    this.getCustomers(); // Fetch customer data when the component initializes
  }

  toggleForm() {
    this.showForm = !this.showForm;
    // If the form is being closed, reset the form
    if (!this.showForm) {
      this.resetForm();
    }
  }

  resetForm() {
    this.customerForm.reset(); // Reset form fields
    this.formSubmitAttempt = false; // Reset submission attempt flag
    this.editingCustomer = null; // Reset the editingCustomer to null
  }

  // Method to fetch customers from the database
  getCustomers() {
    this.customerService.getCustomers().subscribe(
      (response: any) => {
        this.customers = response; // Store the fetched data in the customers array
        this.filteredCustomers = this.customers; // Initially, filteredCustomers contains all customers
      },
      (error: any) => {
        console.error('Error fetching customer data:', error);
      }
    );
  }

  // Handle form submission
  onSubmit() {
    this.formSubmitAttempt = true;

    if (this.customerForm.valid) {
      if (this.editingCustomer) {
        // Update existing customer
        this.customerService
          .updateCustomer(this.editingCustomer._id, this.customerForm.value)
          .subscribe(
            (response: any) => {
              console.log('Customer updated successfully:', response);
              this.showForm = false;
              this.resetForm();
              this.getCustomers(); // Refresh the list
            },
            (error: any) => {
              console.error('Error updating customer:', error);
            }
          );
      } else {
        // Add new customer
        this.customerService.addCustomer(this.customerForm.value).subscribe(
          (response: any) => {
            console.log('Customer added successfully:', response);
            this.showForm = false;
            this.resetForm();
            this.getCustomers(); // Refresh the list
          },
          (error: any) => {
            console.error('Error adding customer:', error);
          }
        );
      }
    } else {
      Object.keys(this.customerForm.controls).forEach((field) => {
        const control = this.customerForm.get(field);
        control?.markAsTouched({ onlySelf: true });
      });
    }
  }

  onEdit(customer: any) {
    this.editingCustomer = customer;
    this.showForm = true;

    // Populate the form with the customer data
    this.customerForm.patchValue({
      name: customer.name,
      email: customer.email,
      mobileNumber: customer.mobileNumber,
      accountNumber: customer.accountNumber,
      address: customer.address,
    });
  }

  onDelete(id: string) {
    if (confirm('Are you sure you want to delete this customer?')) {
      this.customerService.deleteCustomer(id).subscribe(
        (response: any) => {
          console.log('Customer deleted successfully:', response);
          this.getCustomers(); // Refresh the list
        },
        (error: any) => {
          console.error('Error deleting customer:', error);
        }
      );
    }
  }

  // Method to filter customers based on search input
  filterCustomers() {
    const query = this.searchQuery.toLowerCase();

    // If the search query is empty, show all customers
    if (!query) {
      this.filteredCustomers = [...this.customers];
    } else {
      // Otherwise, filter based on the search criteria
      this.filteredCustomers = this.customers.filter(
        (customer) =>
          customer.name.toLowerCase().includes(query) ||
          customer.email.toLowerCase().includes(query) ||
          customer.mobileNumber.includes(query) ||
          customer.accountNumber.includes(query) ||
          customer.address.toLowerCase().includes(query)
      );
    }
  }

  get formControls() {
    return this.customerForm.controls;
  }
}