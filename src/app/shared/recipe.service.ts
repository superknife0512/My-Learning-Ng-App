import { ShoppingService } from './shopping.service';
import { Injectable } from '@angular/core';
import { Recipe } from './../recipe/recipe.model';
import { Ingredient } from './ingredient.model';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {

    recipeChangeEvent = new Subject<Recipe[]>();
    constructor(private shoppingService: ShoppingService) {}
    // public selectRecipeEvent = new Subject<Recipe>();

    private recipes: Array<Recipe> =  [];

    getRecipes() {
        return [...this.recipes];
    }

    getRecipeById(id: string) {
        console.log(id);
        const recipe = [...this.recipes].find(ele => {
            return ele.id === id;
        });
        return recipe;
    }

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipeChangeEvent.next(recipes);
    }

    createNewRecipe(recipe: Recipe) {
        console.log(recipe);
        const newRecipe = new Recipe(recipe.name, recipe.desc, recipe.imgUrl, recipe.ingredients);
        this.recipes.push(newRecipe);
        this.recipeChangeEvent.next(this.recipes);
    }

    addShoppingList(ingredients: Ingredient[]) {
        this.shoppingService.setIngredients(ingredients);
    }

    updateRecipeById(id: string, recipe: Recipe) {
        const recipes = [...this.recipes];
        const editingRecipe = recipes.find(ele => ele.id === id);
        editingRecipe.name = recipe.name;
        editingRecipe.desc = recipe.desc;
        editingRecipe.imgUrl = recipe.imgUrl;
        editingRecipe.ingredients = recipe.ingredients;
        this.recipes = recipes;
        this.recipeChangeEvent.next(this.recipes);
    }

    deleteRecipeById(id: string) {
        console.log(id);
        const recipes = [...this.recipes];
        const newRecipes = recipes.filter(rep => rep.id !== id);
        this.recipes = newRecipes;
        this.recipeChangeEvent.next(this.recipes);

    }
}
