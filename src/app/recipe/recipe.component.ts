import { Recipe } from './recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  recipeDetail: Recipe;

  constructor() { }

  ngOnInit() {
  }

  setDetail(recipeData: Recipe) { 
    this.recipeDetail = recipeData;
  }

}
