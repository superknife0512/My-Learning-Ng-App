import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})

export class RecipeListComponent implements OnInit {

  @Output() onGetDetailEvent = new EventEmitter<Recipe>();

  recipes: Array<Recipe> = [
    new Recipe('Pizza recipe', 'Here is an awesome recipe', 'https://www.kingarthurflour.com/sites/default/files/recipe_legacy/20-3-large.jpg'),
    new Recipe('Pizza with cheese', 'Here is the best recipe', 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/9/27/0/KC1812_Spaghetti-Squash-Crust-Pizza_s4x3.jpg.rend.hgtvcom.826.620.suffix/1538057934894.jpeg'),
  ]

  constructor() { }

  ngOnInit() {
  }

  onGetDetail(recipeDetail: Recipe) {
    this.onGetDetailEvent.emit(recipeDetail);
  }

}
