import { Injectable } from '@angular/core';
import { map, take } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private routeControl: Router) {}
  canActivate(route: ActivatedRouteSnapshot, router: RouterStateSnapshot):
              boolean |
              UrlTree |
              Promise<boolean|UrlTree> |
              Observable<boolean|UrlTree> {
    return this.authService.user
      .pipe(take(1),
            map(user => {
              const isAuth = !!user;
              if (isAuth) {
                return true;
              }
              return this.routeControl.createUrlTree(['/auth']);
            }));
          }
}
