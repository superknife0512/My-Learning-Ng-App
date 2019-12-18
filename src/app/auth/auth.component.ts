import { AuthService, AuthResponse } from './auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  isSignupForm = true;
  authForm: FormGroup;
  isLoading = false;
  error: string = null;

  constructor(private authService: AuthService, private curRoute: Router) { }

  ngOnInit() {
    this.authForm = new FormGroup({
      email: new FormControl(null, [Validators.email, Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      cfPassword: new FormControl(null),
    });
  }

  switchMode() {
    this.isSignupForm = !this.isSignupForm;
  }

  onSubmit() {
    if (this.authForm.valid) {
      const email = this.authForm.get('email').value;
      const password = this. authForm.get('password').value;
      this.isLoading = true;
      let respObv: Observable<AuthResponse>;
      if (this.isSignupForm) {
        respObv = this.authService.signup(email, password);
      } else {
        respObv = this.authService.signin(email, password);
      }
      respObv
        .subscribe((response) => {
          console.log(response);
          this.curRoute.navigate(['/recipes']);
        }, errorMessage => {
          console.log(errorMessage);
          this.error = errorMessage;
          this.isLoading = false;
        }, () => {
          this.authForm.reset();
          this.isLoading = false;
        });
    }
  }
}
