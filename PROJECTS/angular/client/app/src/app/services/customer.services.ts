import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  private apiUrl = 'http://localhost:3000/api/customers'; // Replace with your backend URL

  constructor(private http: HttpClient) {}

  addCustomer(customerData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, customerData);
  }
  
  getCustomers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      catchError((error: any) => {
        console.error('Error fetching customers:', error); // Log error details
        return throwError(() => new Error('Error fetching customers'));
      })
    );
  }
   // method for updating an customer
   updateCustomer(id: string, customerData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, customerData).pipe(
      catchError((error: any) => {
        console.error('Error updating customer:', error);
        return throwError(() => new Error('Error updating customer'));
      })
    );
  }

  // method for deleting an customer
  deleteCustomer(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`).pipe(
      catchError((error: any) => {
        console.error('Error deleting customer:', error);
        return throwError(() => new Error('Error deleting customer'));
      })
    );
  }
}