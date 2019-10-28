import { Ingredient } from './../../shared/ingredient.model';
// import { RecipeService } from './../../shared/recipe.service';
import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';
import {RecipeService} from '../../shared/recipe.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit{
  recipe: Recipe;
  isDropdown: boolean = false;

  constructor(private recipeService: RecipeService,
    private curRoute: ActivatedRoute){}

  ngOnInit(){
    this.curRoute.params.subscribe((params)=>{
      this.recipe = this.recipeService.getRecipeById(params['recipeId']);
    })
  }

  addShoppingList(ingredients: Ingredient[]){
    this.recipeService.addShoppingList(ingredients);
  }
}
