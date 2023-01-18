import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class AppErrorHandlerService implements ErrorHandler {
  constructor() { }
  handleError(error: any): void {
    // throw new Error('Method not implemented.');
    alert('An unexpected error occured');
    console.log(error);
  }
}
