import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  ReactiveFormsModule,
  FormGroup,
  Validators,
} from '@angular/forms';
import { EventService } from '../services/events.services'; // Adjust the path as necessary
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule, FormsModule],
  providers: [EventService],
})
export class EventsComponent implements OnInit {
  showForm: boolean = false;
  eventForm: FormGroup;
  events: any[] = []; // Array to hold event data
  filteredEvents: any[] = []; // Array for filtered data
  searchQuery: string = ''; // Variable for search query
  formSubmitAttempt: boolean = false;
  editingEvent: any;

  constructor(
    private fb: FormBuilder,
    private eventService: EventService
  ) {
    this.eventForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      date: ['', [Validators.required]],
      place: ['', [Validators.required]],
    });
  }

  ngOnInit() {
    this.getEvents(); // Fetch event data when the component initializes
  }

  toggleForm() {
    this.showForm = !this.showForm;
    // If the form is being closed, reset the form
    if (!this.showForm) {
      this.resetForm();
    }
  }

  resetForm() {
    this.eventForm.reset(); // Reset form fields
    this.formSubmitAttempt = false; // Reset submission attempt flag
    this.editingEvent = null; // Reset the editingEvent to null
  }

  // Method to fetch events from the database
  getEvents() {
    this.eventService.getEvents().subscribe(
      (response: any) => {
        this.events = response; // Store the fetched data in the events array
        this.filteredEvents = this.events; // Initially, filteredEvents contains all events
      },
      (error: any) => {
        console.error('Error fetching event data:', error);
      }
    );
  }

  // Handle form submission
  onSubmit() {
    this.formSubmitAttempt = true;

    if (this.eventForm.valid) {
      if (this.editingEvent) {
        // Update existing event
        this.eventService
          .updateEvent(this.editingEvent._id, this.eventForm.value)
          .subscribe(
            (response: any) => {
              console.log('Event updated successfully:', response);
              this.showForm = false;
              this.resetForm();
              this.getEvents(); // Refresh the list
            },
            (error: any) => {
              console.error('Error updating event:', error);
            }
          );
      } else {
        // Add new event
        this.eventService.addEvent(this.eventForm.value).subscribe(
          (response: any) => {
            console.log('Event added successfully:', response);
            this.showForm = false;
            this.resetForm();
            this.getEvents(); // Refresh the list
          },
          (error: any) => {
            console.error('Error adding event:', error);
          }
        );
      }
    } else {
      Object.keys(this.eventForm.controls).forEach((field) => {
        const control = this.eventForm.get(field);
        control?.markAsTouched({ onlySelf: true });
      });
    }
  }

  onEdit(event: any) {
    this.editingEvent = event;
    this.showForm = true;

    // Populate the form with the event data
    this.eventForm.patchValue({
      name: event.name,
      description: event.description,
      date: event.date,
      place: event.place,
    });
  }

  onDelete(id: string) {
    if (confirm('Are you sure you want to delete this event?')) {
      this.eventService.deleteEvent(id).subscribe(
        (response: any) => {
          console.log('Event deleted successfully:', response);
          this.getEvents(); // Refresh the list
        },
        (error: any) => {
          console.error('Error deleting event:', error);
        }
      );
    }
  }

  // Method to filter events based on search input
  filterEvents() {
    const query = this.searchQuery.toLowerCase();

    // If the search query is empty, show all events
    if (!query) {
      this.filteredEvents = [...this.events];
    } else {
      // Otherwise, filter based on the search criteria
      this.filteredEvents = this.events.filter(
        (event) =>
          event.name.toLowerCase().includes(query) ||
          event.description.toLowerCase().includes(query) ||
          event.date.toLowerCase().includes(query) ||
          event.place.toLowerCase().includes(query)
      );
    }
  }

  get formControls() {
    return this.eventForm.controls;
  }
}
