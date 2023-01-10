import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { BaseService } from './base/base.service';

@Injectable({
  providedIn: 'root',
})
export class PostsService extends BaseService {
  // private baseUrl = 'https://xxjsonplaceholder.typicode.com/posts';
  constructor(http: HttpClient) {
    super('https://jsonplaceholder.typicode.com/posts', http);
  }
}
