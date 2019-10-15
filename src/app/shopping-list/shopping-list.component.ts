import { Component, OnInit } from '@angular/core';
import { Ingredient } from "../shared/ingredient.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Array<Ingredient> = [
    new Ingredient('Cheese', 4),
    new Ingredient('Tomatoes', 2)
  ]

  constructor() { }

  ngOnInit() {
  }

  onAddIngredient(ingredientData: Ingredient){
    this.ingredients.push(ingredientData);
  }

}
