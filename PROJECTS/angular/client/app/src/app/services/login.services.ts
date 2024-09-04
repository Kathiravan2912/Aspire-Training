import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loginUrl = 'http://localhost:3000/api/login'; // Replace with your actual login API URL

  constructor(private http: HttpClient) {}

  login(name: string, password: string): Observable<any> {
    return this.http.post<any>(this.loginUrl, { name, password }).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    return throwError(() => new Error(error.message || 'Server error'));
  }
}



