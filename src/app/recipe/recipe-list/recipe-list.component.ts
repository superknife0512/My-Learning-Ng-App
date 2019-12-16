import { DataStorageService } from './../../shared/dataStorage.service';
import { Subscription } from 'rxjs';
import { RecipeService } from './../../shared/recipe.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})

export class RecipeListComponent implements OnInit, OnDestroy {

  recipes: Array<Recipe>;
  subscription: Subscription;

  constructor(private recipeService: RecipeService, private storeService: DataStorageService) { }

  ngOnInit() {
    this.storeService.fetchRecipes();
    this.subscription = this.recipeService.recipeChangeEvent.subscribe((recipes)=>{
      this.recipes = [...recipes];
    })
  }

  ngOnDestroy(){
    this.subscription.unsubscribe()
  }

}
