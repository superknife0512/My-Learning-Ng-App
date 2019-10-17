import { ShoppingService } from './shared/shopping.service';
// import { RecipeService } from './shared/recipe.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
 
export class AppComponent implements OnInit {
  currentPage: string = 'recipe';
  // selectedRecipe: Recipe;

  constructor(private shoppingListService: ShoppingService){}

  ngOnInit(){
    this.shoppingListService.changePageEvent
      .subscribe((page: string)=>{
        this.currentPage = page;
      })
  }
  onChangePage(page: string){
    this.currentPage = page;
  }
}
