import { AuthService } from './../auth/auth.service';
import { RecipeService } from './recipe.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {map, take, tap, exhaustMap} from 'rxjs/operators';
import { Recipe } from '../recipe/recipe.model';

const BASE_URL = `https://angular-learning-a555e.firebaseio.com/`;

@Injectable({providedIn: 'root'})
export class DataStorageService {
  constructor(
    private $http: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.$http.put(BASE_URL + 'recipes.json', recipes)
      .subscribe(response => {
        console.log(response);
      });
  }

  fetchRecipes() {
    this.$http.get<Recipe[]>(BASE_URL + 'recipes.json')
      .pipe(map(recipes => {
        const newRecipes = recipes.map(recp => {
          return {
            ...recp,
            ingredients: recp.ingredients || []
          };
        });
        return newRecipes;
      }))
    .subscribe(recipes => {
      this.recipeService.setRecipes(recipes);
    });
  }
}
