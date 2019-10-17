import { ShoppingService } from './shopping.service';
import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './../recipe/recipe.model';
import { Ingredient } from './ingredient.model';

@Injectable()
export class RecipeService { 
    constructor(private shoppingService: ShoppingService){}
    public selectRecipeEvent = new EventEmitter<Recipe>();

    private recipes: Array<Recipe> =  [
        new Recipe('Pizza recipe', 
            'Here is an awesome recipe', 
            'https://www.kingarthurflour.com/sites/default/files/recipe_legacy/20-3-large.jpg',
            [
                new Ingredient('cheese', 3),
                new Ingredient('bread', 1),
                new Ingredient('tomato', 1),
            ]),

        new Recipe('Pizza with cheese', 
            'Here is the best recipe', 
            'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/9/27/0/KC1812_Spaghetti-Squash-Crust-Pizza_s4x3.jpg.rend.hgtvcom.826.620.suffix/1538057934894.jpeg',
            [
                new Ingredient('cheese', 5),
                new Ingredient('bread', 1),
                new Ingredient('tomato', 1),
                new Ingredient('fish', 1)
            ]),
    ]

    setRecipeDetail(recipeData: Recipe) {
        this.selectRecipeEvent.emit(recipeData);
    }

    getRecipes(){
        return [...this.recipes]
    }

    addShoppingList(ingredients: Ingredient[]){
        this.shoppingService.setIngredients(ingredients);
    }
}