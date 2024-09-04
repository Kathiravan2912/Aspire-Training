import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private apiUrl = 'http://localhost:3000/api/events'; // Replace with your backend URL

  constructor(private http: HttpClient) {}

  // Method to add a new event
  addEvent(eventData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, eventData).pipe(
      catchError((error: any) => {
        console.error('Error adding event:', error);
        return throwError(() => new Error('Error adding event'));
      })
    );
  }

  // Method to get all events
  getEvents(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      catchError((error: any) => {
        console.error('Error fetching events:', error);
        return throwError(() => new Error('Error fetching events'));
      })
    );
  }

  // Method to update an event by ID
  updateEvent(id: string, eventData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, eventData).pipe(
      catchError((error: any) => {
        console.error('Error updating event:', error);
        return throwError(() => new Error('Error updating event'));
      })
    );
  }

  // Method to delete an event by ID
  deleteEvent(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`).pipe(
      catchError((error: any) => {
        console.error('Error deleting event:', error);
        return throwError(() => new Error('Error deleting event'));
      })
    );
  }
}
