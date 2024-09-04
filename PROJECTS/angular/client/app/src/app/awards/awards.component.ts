import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  ReactiveFormsModule,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AwardService } from '../services/awards.services '; // Adjust the path as necessary
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule, FormsModule],
  providers: [AwardService],
})
export class AwardsComponent implements OnInit {
  showForm: boolean = false;
  awardForm: FormGroup;
  awards: any[] = []; // Array to hold award data
  filteredAwards: any[] = []; // Array for filtered data
  searchQuery: string = ''; // Variable for search query
  formSubmitAttempt: boolean = false;
  editingAward: any;

  constructor(private fb: FormBuilder, private awardService: AwardService) {
    this.awardForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      date: ['', [Validators.required]],
      place: ['', [Validators.required]],
    });
  }

  ngOnInit() {
    this.getAwards(); // Fetch award data when the component initializes
  }

  toggleForm() {
    this.showForm = !this.showForm;
    // If the form is being closed, reset the form
    if (!this.showForm) {
      this.resetForm();
    }
  }

  resetForm() {
    this.awardForm.reset(); // Reset form fields
    this.formSubmitAttempt = false; // Reset submission attempt flag
    this.editingAward = null; // Reset the editingAward to null
  }

  // Method to fetch awards from the database
  getAwards() {
    this.awardService.getAwards().subscribe(
      (response: any) => {
        this.awards = response; // Store the fetched data in the awards array
        this.filteredAwards = this.awards; // Initially, filteredAwards contains all awards
      },
      (error: any) => {
        console.error('Error fetching award data:', error);
      }
    );
  }

  // Handle form submission
  onSubmit() {
    this.formSubmitAttempt = true;

    if (this.awardForm.valid) {
      if (this.editingAward) {
        // Update existing award
        this.awardService
          .updateAward(this.editingAward._id, this.awardForm.value)
          .subscribe(
            (response: any) => {
              console.log('Award updated successfully:', response);
              this.showForm = false;
              this.resetForm();
              this.getAwards(); // Refresh the list
            },
            (error: any) => {
              console.error('Error updating award:', error);
            }
          );
      } else {
        // Add new award
        this.awardService.addAward(this.awardForm.value).subscribe(
          (response: any) => {
            console.log('Award added successfully:', response);
            this.showForm = false;
            this.resetForm();
            this.getAwards(); // Refresh the list
          },
          (error: any) => {
            console.error('Error adding award:', error);
          }
        );
      }
    } else {
      Object.keys(this.awardForm.controls).forEach((field) => {
        const control = this.awardForm.get(field);
        control?.markAsTouched({ onlySelf: true });
      });
    }
  }

  onEdit(award: any) {
    this.editingAward = award;
    this.showForm = true;

    // Populate the form with the award data
    this.awardForm.patchValue({
      name: award.name,
      description: award.description,
      date: award.date,
      place: award.place,
    });
  }

  onDelete(id: string) {
    if (confirm('Are you sure you want to delete this award?')) {
      this.awardService.deleteAward(id).subscribe(
        (response: any) => {
          console.log('Award deleted successfully:', response);
          this.getAwards(); // Refresh the list
        },
        (error: any) => {
          console.error('Error deleting award:', error);
        }
      );
    }
  }

  // Method to filter awards based on search input
  filterAwards() {
    const query = this.searchQuery.toLowerCase();

    // If the search query is empty, show all awards
    if (!query) {
      this.filteredAwards = [...this.awards];
    } else {
      // Otherwise, filter based on the search criteria
      this.filteredAwards = this.awards.filter(
        (award) =>
          award.name.toLowerCase().includes(query) ||
          award.description.toLowerCase().includes(query) ||
          award.date.toLowerCase().includes(query) ||
          award.place.toLowerCase().includes(query)
      );
    }
  }

  get formControls() {
    return this.awardForm.controls;
  }
}
