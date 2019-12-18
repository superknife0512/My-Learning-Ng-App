import { User } from './../shared/user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';
import { throwError, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

const API_KEY = 'AIzaSyB2GJ9LPijYivgQQz3hPMswyu5-21pofHU';

export interface AuthResponse {
  idToken: string;
  refreshToken: string;
  email: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({providedIn: 'root'})
export class AuthService {
  isAuth = false;
  user = new BehaviorSubject<User>(null);
  timeOut = null;

  constructor(private $http: HttpClient, private curRoute: Router) {}
  signup(email: string, password: string) {
    return this.$http.post<AuthResponse>(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`, {
      email,
      password,
      returnSecureToken: true
    }).pipe(catchError(this.errorHandling), tap(this.userHandling));
  }

  signin(email: string, password: string) {
    return this.$http.post<AuthResponse>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`, {
      email,
      password,
      returnSecureToken: true
    }).pipe(catchError(this.errorHandling), tap(this.userHandling));
  }

  autoSignin() {
    const userData: {
      email: string;
      userId: string;
      tokenId: string;
      expiresIn: string
    } = JSON.parse(sessionStorage.getItem('userData'));
    if (!userData) {
      return;
    }
    const user = new User(
      userData.email,
      userData.userId,
      userData.tokenId,
      new Date(userData.expiresIn)
    );
    if (!user.token) {
      return;
    }
    this.user.next(user);
    const exprirationDuration = new Date(userData.expiresIn).getTime() - new Date().getTime();
    this.autoLogout(exprirationDuration);
  }

  logout() {
    this.user.next(null);
    sessionStorage.removeItem('userData');
    this.curRoute.navigate(['/auth']);
    if (this.timeOut) {
      clearTimeout(this.timeOut);
      this.timeOut = null;
    }
  }

  autoLogout(exprirationDuration: number) {
    this.timeOut = setTimeout(() => {
      this.logout();
    }, exprirationDuration);
  }

  private errorHandling(errorRes: any) {
    console.log(errorRes);
    let errorMessage = 'Some unknown error occurr';
    if (!errorRes.error.error || !errorRes.error) {
      return throwError(errorMessage);
    } else {
      switch (errorRes.error.error.message) {
        case 'EMAIL_EXISTS':
          errorMessage = 'This email has been registered';
          break;
        case 'OPERATION_NOT_ALLOWED':
          errorMessage = 'Password sign-in is disabled ';
          break;
        case 'TOO_MANY_ATTEMPTS_TRY_LATER':
          errorMessage = 'We have blocked all requests from this device due to unusual activity. Try again later.';
          break;
        case 'EMAIL_NOT_FOUND':
          errorMessage = 'This email doesn\'t exist';
          break;
        case 'INVALID_PASSWORD':
          errorMessage = 'Your password is incorrect.';
          break;
      }
      return throwError(errorMessage);
    }
  }

  private userHandling = (response: AuthResponse) => {
    const now = (new Date()).getTime();
    const tokenTime = new Date(now + (+response.expiresIn * 1000));
    const user = new User(
      response.email,
      response.localId,
      response.idToken,
      tokenTime
    );
    this.user.next(user);
    sessionStorage.setItem('userData', JSON.stringify(user));
    this.autoLogout(parseInt(response.expiresIn, 10) * 1000);
  }
}
