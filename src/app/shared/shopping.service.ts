import { EventEmitter } from '@angular/core';
import { Ingredient } from './ingredient.model';

export class ShoppingService {
    changeIngredientsEvent = new EventEmitter<Ingredient[]>();
    changePageEvent = new EventEmitter<string>();

    private ingredients: Array<Ingredient> = [
        new Ingredient('Cheese', 4),
        new Ingredient('Tomatoes', 2)
    ]

    getIngredients(){
        return [...this.ingredients];
    }

    setIngredients(ingredients: Ingredient[]){
        this.ingredients = [...ingredients];
        // change page to shopping list page
        this.changePageEvent.emit('shoppingList')
    }

    addIngredient(ingredientData: Ingredient){
        this.ingredients.push(ingredientData);
        this.changeIngredientsEvent.emit([...this.ingredients])
    }
}