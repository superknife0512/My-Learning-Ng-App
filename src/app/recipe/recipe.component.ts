import { take } from 'rxjs/operators';
import { AuthService } from './../auth/auth.service';
// import { RecipeService } from './../shared/recipe.service';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss'],
})
export class RecipeComponent implements OnInit {

  constructor(private authService: AuthService, private curRoute: Router) { }

  ngOnInit() {
    this.authService.user.pipe(take(1)).subscribe(userData => {
      if (!userData.token) {
        this.curRoute.navigate(['/auth']);
      }
    });
  }
}
