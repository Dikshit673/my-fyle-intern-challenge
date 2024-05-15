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

    if (error.status / 100 === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred ${error.error.message}`;

    }
    else if (error.status / 100 === 4) {
      if (error.status === 400) {
        errorMessage = `${error.status}, its a bad requestand ${error.error.message}`
      }
      else if (error.status === 401) {
        errorMessage = `${error.status}, User anauthorised ${error.error.message}`
      }
      else if (error.status === 403) {
        errorMessage = `${error.status}, User forbidden ${error.error.message}`
      }
      else if (error.status === 404) {
        errorMessage = `${error.status}, User and its Repository ${error.error.message}`
      }
      else if (error.status === 408) {
        errorMessage = `${error.status}, request timeout ${error.error.message}`
      }
      else {
        errorMessage = `${error.status},error is ${error.error.message}`
      }
    }
    else if (error.status / 100 === 5) {
      if (error.status === 500) {
        errorMessage = `${error.status}, internal server error, ${error.error.message}`
      }
      else if (error.status === 501) {
        errorMessage = `${error.status}, requestnot supported by server, ${error.error.message}`
      }
      else if (error.status === 502) {
        errorMessage = `${error.status}, bad gateway, ${error.error.message}`
      }
      else if (error.status === 503) {
        errorMessage = `${error.status}, service unavailable, ${error.error.message}`
      }
      else if (error.status === 504) {
        errorMessage = `${error.status}, gateway timeout, ${error.error.message}`
      }
      else {
        errorMessage = `${error.status},server error ${error.error.message}`
      }
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
