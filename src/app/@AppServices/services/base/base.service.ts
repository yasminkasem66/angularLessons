import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Inject, Injectable, Injector } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class BaseService {
  // private baseUrl = 'https://xxjsonplaceholder.typicode.com/posts';
  constructor(
    @Inject('baseUrl') private baseUrl: string,
    private http: HttpClient
  ) {}

  getAll() {
    return this.http
      .get(this.baseUrl)
      .pipe(tap((data) => console.log({ data }), catchError(this.handleError)));
  }
  create(resource: any) {
    return this.http.post(this.baseUrl, JSON.stringify(resource));
  }
  update(resource: any) {
    return this.http.put(
      `${this.baseUrl}/${resource.id}`,
      JSON.stringify(resource)
    );
  }
  delete(id: any) {
    return this.http
      .delete(`${this.baseUrl}/${id}`)
      .pipe(tap((data) => console.log({ data }), catchError(this.handleError)));
  }

  // error interceptor
  handleError(err: HttpErrorResponse): Observable<never> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else if (err.status === 404) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(() => errorMessage);
  }
}
