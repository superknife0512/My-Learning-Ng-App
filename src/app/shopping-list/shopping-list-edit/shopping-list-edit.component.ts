import { ShoppingService } from './../../shared/shopping.service';
import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.scss']
})
export class ShoppingListEditComponent implements OnInit {
  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
  }

  addIngredient(ingrInput, amountInput){
    if(ingrInput.value && amountInput.value){
      this.shoppingService.addIngredient({
          name: ingrInput.value,
          amount: amountInput.value
      })
      ingrInput.value = '';
      amountInput.value = '';
    }
  }
}
