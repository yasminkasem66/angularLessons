import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsernameValidtor } from './username.validator';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css'],
})
export class SignupFormComponent {
  Registration = new FormGroup({
    account: new FormGroup({
      username: new FormControl(
        '',
        [
          Validators.required,
          Validators.minLength(3),
          UsernameValidtor.cannotContainSpace,
        ],
        // asynch validtor
        UsernameValidtor.shouldBeUnique
      ),
      password: new FormControl('', [
        Validators.required,
        Validators.maxLength(10),
      ])
    }),
  });
  //this is a property , it looks like a field from the outside but internally they are like methods
  get username() {
    return this.Registration.get('account.username');
  }
  get password() {
    return this.Registration.get('account.password');
  }

  login() {
    this.Registration.setErrors({
      invalidLogin: true,
    });
  }
}
