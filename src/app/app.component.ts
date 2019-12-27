import { AuthService } from './auth/auth.service';
import { ShoppingService } from './shared/shopping.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {  currentPage = 'recipe';
  // selectedRecipe: Recipe;

  constructor(private shoppingListService: ShoppingService, private authService: AuthService) {}

  ngOnInit() {
    this.shoppingListService.changePageEvent
      .subscribe((page: string) => {
        this.currentPage = page;
      });

    this.authService.autoSignin();
  }
}
