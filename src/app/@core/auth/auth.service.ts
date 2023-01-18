import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Login } from 'src/app/@AppServices/models/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  emitterSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  login(credentals: Login) {
    console.log(credentals);

    // let emitter = new EventEmitter(true);
    let emitter: Observable<Boolean> = new Observable<Boolean>();

    if (credentals.email == "yasmin@gmail.com" && credentals.password == "123456") {
      localStorage.setItem("username", credentals.email)
      this.emitterSubject.next(true)
    } else {
      this.emitterSubject.next(false)
    }
    emitter = this.emitterSubject.asObservable()

    return emitter
  }

  public get isLogin(): boolean {
    let userlanguage = this.emitterSubject.value;
    return userlanguage;
  }

  logout() {
    localStorage.clear();
    this.emitterSubject.next(false)
  }
}
