import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Login } from '../@AppServices/models/login';
import { AuthService } from '../@core/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login!: FormGroup;
  invalidLogin: boolean = false;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router,
    private authService: AuthService) {
    this.createForm()
  }

  ngOnInit(): void {
  }

  createForm() {
    this.login = this.fb.group({
      email: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.maxLength(10)]]
    })
  }

  get fc() {
    return this.login.controls;
  }

  signIn() {

    if (this.login.invalid) return;
    let credentals = this.login.value as Login;
    this.authService.login(credentals).subscribe((res) => {
      console.log(res);

      if (res == true) { this.router.navigate(['/']) }
      else {
        this.invalidLogin = true
      }
    })
  }


}
