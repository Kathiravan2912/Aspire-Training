import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AwardService {
  private apiUrl = 'http://localhost:3000/api/awards'; // Replace with your backend URL

  constructor(private http: HttpClient) {}

  // Method to add a new award
  addAward(awardData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, awardData).pipe(
      catchError((error: any) => {
        console.error('Error adding award:', error);
        return throwError(() => new Error('Error adding award'));
      })
    );
  }

  // Method to get all awards
  getAwards(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      catchError((error: any) => {
        console.error('Error fetching awards:', error);
        return throwError(() => new Error('Error fetching awards'));
      })
    );
  }

  // Method to update an award by ID
  updateAward(id: string, awardData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, awardData).pipe(
      catchError((error: any) => {
        console.error('Error updating award:', error);
        return throwError(() => new Error('Error updating award'));
      })
    );
  }

  // Method to delete an award by ID
  deleteAward(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`).pipe(
      catchError((error: any) => {
        console.error('Error deleting award:', error);
        return throwError(() => new Error('Error deleting award'));
      })
    );
  }
}
