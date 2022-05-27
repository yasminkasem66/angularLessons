import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.scss'],
})
export class ChangepasswordComponent implements OnInit {
  changepassword: any;
  constructor(fb: FormBuilder) {
    this.changepassword = fb.group({
      oldpassword: ['', [Validators.required]],
      newpassword: ['', [Validators.required]],
      confirmnewpassword: ['', [Validators.required]],
    });
    // console.log(this.fc());
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
