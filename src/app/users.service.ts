import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { }

  private apiUrl = 'https://api.github.com';

  private handleError(error: HttpErrorResponse) {
    let errorMessage: String = "";
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred ${error.error.message}`;

    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      errorMessage = `Backend returned code ${error.status}, User and its Repository ${error.error.message}`
      // console.error(error);

    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error(`${errorMessage}, please try again later.`));

  }

  getUserDetails(username: string): Observable<any> {
    // console.log(`${this.apiUrl}/users/${username}`);
    return this.httpClient.get(`${this.apiUrl}/users/${username}`)
      .pipe(catchError(this.handleError));
  }


  getUserRepos(username: string): Observable<any> {
    // console.log(`${this.apiUrl}/users/${username}/repos`);
    return this.httpClient.get(`${this.apiUrl}/users/${username}/repos`)
      .pipe(catchError(this.handleError));
  }
}
