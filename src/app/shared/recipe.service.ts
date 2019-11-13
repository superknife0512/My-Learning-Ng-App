import { ShoppingService } from './shopping.service';
import { Injectable } from '@angular/core';
import { Recipe } from './../recipe/recipe.model';
import { Ingredient } from './ingredient.model';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService { 
    constructor(private shoppingService: ShoppingService){}
    editingRecipe: Subject<string>;
    // public selectRecipeEvent = new Subject<Recipe>();

    private recipes: Array<Recipe> =  [
        new Recipe(
            'Pizza recipe', 
            'Here is an awesome recipe', 
            'https://assets.entrepreneur.com/content/3x2/1300/20150730174541-chicago-pizza.jpeg',
            [
                new Ingredient('cheese', 3),
                new Ingredient('bread', 1),
                new Ingredient('tomato', 1),
            ]),

        new Recipe(
            'Pizza with cheese', 
            'Here is the best recipe', 
            'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/9/27/0/KC1812_Spaghetti-Squash-Crust-Pizza_s4x3.jpg.rend.hgtvcom.826.620.suffix/1538057934894.jpeg',
            [
                new Ingredient('cheese', 5),
                new Ingredient('bread', 1),
                new Ingredient('tomato', 1),
                new Ingredient('fish', 1)
            ]),
    ]

    getRecipes(){
        return [...this.recipes]
    }

    getRecipeById(id: string) {
        console.log(id);
        const recipe = [...this.recipes].find(ele=>{
            return ele.id === id
        })
        return recipe
    }

    addShoppingList(ingredients: Ingredient[]){
        this.shoppingService.setIngredients(ingredients);
    }

    createNewRecipe(recipe: Recipe) {
        const newRecipe = new Recipe(recipe.name, recipe.desc, recipe.imgUrl, recipe.ingredients);
        this.recipes.push(newRecipe);
    }
}