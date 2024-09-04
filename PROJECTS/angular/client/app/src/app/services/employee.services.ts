import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {

  private apiUrl = 'http://localhost:3000/api/employees';

  constructor(private http: HttpClient) {}

  addEmployee(employeeData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, employeeData);
  }

  getEmployees(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      catchError((error: any) => {
        console.error('Error fetching employees:', error); // Log error details
        return throwError(() => new Error('Error fetching employees'));
      })
    );
  }
   // method for updating an employee
   updateEmployee(id: string, employeeData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, employeeData).pipe(
      catchError((error: any) => {
        console.error('Error updating employee:', error);
        return throwError(() => new Error('Error updating employee'));
      })
    );
  }

  // method for deleting an employee
  deleteEmployee(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`).pipe(
      catchError((error: any) => {
        console.error('Error deleting employee:', error);
        return throwError(() => new Error('Error deleting employee'));
      })
    );
  }

}
