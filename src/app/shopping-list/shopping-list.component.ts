import { ShoppingService } from './../shared/shopping.service';
import { Component, OnInit, OnChanges } from '@angular/core';
import { Ingredient } from "../shared/ingredient.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
  providers: []
})
export class ShoppingListComponent implements OnInit {

  ingredients: Array<Ingredient>;

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
    this.ingredients = this.shoppingService.getIngredients();
    this.shoppingService.changeIngredientsEvent
      .subscribe((ingredientsData: Ingredient[])=>{
        this.ingredients = ingredientsData
      })
  }

}
