// import { EventEmitter } from '@angular/core';
import { Ingredient } from './ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingService {
    changeIngredientsEvent = new Subject<Ingredient[]>();
    changePageEvent = new Subject<string>();
    editingChoice = new Subject<number>();

    private ingredients: Array<Ingredient> = [
        new Ingredient('Cheese', 4),
        new Ingredient('Tomatoes', 2)
    ]

    getIngredients(){
        return [...this.ingredients];
    }
    
    getIngredient(index: number){
        return this.ingredients[index]
    }

    setIngredients(ingredients: Ingredient[]){
        this.ingredients = [...ingredients];
        // change page to shopping list page
        // this.changePageEvent.next('shoppingList');
        this.changeIngredientsEvent.next([...this.ingredients])
    }

    setIngredient(index:number, newIngredient: Ingredient){
        const ingredients = [...this.ingredients];
        ingredients[index] = newIngredient;
        this.setIngredients(ingredients);
    }

    addIngredient(ingredientData: Ingredient){
        this.ingredients.push(ingredientData);
        this.changeIngredientsEvent.next([...this.ingredients])
    }

    deleteIngredient(index: number){
        const ingredients = [...this.ingredients];
        ingredients.splice(index, 1);
        this.ingredients = [...ingredients];
        console.log(this.ingredients);
        this.changeIngredientsEvent.next([...this.ingredients]);
    }
}