import { ShoppingService } from './../shared/shopping.service';
import { Component, OnInit,  } from '@angular/core';
import { Ingredient } from "../shared/ingredient.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {

  ingredients: Array<Ingredient>;

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
    this.ingredients = this.shoppingService.getIngredients();
    this.shoppingService.changeIngredientsEvent
      .subscribe((ingredientsData: Ingredient[])=>{
        this.ingredients = ingredientsData
      })
  }

  editItem(itemId: number){
    this.shoppingService.editingChoice.next(itemId)
  }

}
