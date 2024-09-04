import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private apiUrl = 'http://localhost:3000/api/signup'; // Replace with your backend URL

  constructor(private http: HttpClient) {}

  addAdmin(adminData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, adminData).pipe(
      catchError((error:any)=>{
        console.log('Error adding admin:', error);
        return throwError(()=> new Error('error adding new admin'));
      })
    )
  }
}
