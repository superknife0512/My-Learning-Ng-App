import { Component, OnInit } from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})

export class RecipeListComponent implements OnInit {

  recipes: Array<Recipe> = [
    new Recipe('Pizza recipe', 'Here is an awesome recipe', 'https://www.kingarthurflour.com/sites/default/files/recipe_legacy/20-3-large.jpg'),
  ]

  constructor() { }

  ngOnInit() {
  }

}
