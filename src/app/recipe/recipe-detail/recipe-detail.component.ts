import { Ingredient } from './../../shared/ingredient.model';
// import { RecipeService } from './../../shared/recipe.service';
import { Recipe } from './../recipe.model';
import { Component, Input } from '@angular/core';
import {RecipeService} from '../../shared/recipe.service'

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent {
  @Input() recipe: Recipe;
  isDropdown: boolean = false;

  constructor(private recipeService: RecipeService){}

  addShoppingList(ingredients: Ingredient[]){
    this.recipeService.addShoppingList(ingredients);
  }
}
