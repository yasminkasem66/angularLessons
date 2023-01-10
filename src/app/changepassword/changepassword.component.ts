import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { invalidOldPassword, paswordShouldMatch } from './password.validator';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.scss'],
})
export class ChangepasswordComponent implements OnInit {
  changepassword: any;
  constructor(private fb: FormBuilder) {
    this.createChangePasswordForm();
    // console.log(this.fc());
  }

  createChangePasswordForm() {
    this.changepassword = this.fb.group(
      {
        oldpassword: ['', [Validators.required], invalidOldPassword],
        newpassword: ['', [Validators.required]],
        confirmnewpassword: ['', [Validators.required]],
      },
      { validators: [paswordShouldMatch('newpassword', 'confirmnewpassword')] }
    );
  }

  changePassword() {
    console.log(this.changepassword);
    console.log(this.changepassword.value);
  }

  get fc() {
    return this.changepassword.controls;
  }
  get oldpassword() {
    return this.changepassword.get('oldpassword');
  }
  get newpassword() {
    return this.changepassword.get('newpassword');
  }
  get confirmnewpassword() {
    return this.changepassword.get('confirmnewpassword');
  }

  ngOnInit(): void {}
}
