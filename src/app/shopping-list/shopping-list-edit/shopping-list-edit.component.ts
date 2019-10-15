import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.scss']
})
export class ShoppingListEditComponent implements OnInit {
  @Output() addIngredientEvent = new EventEmitter<Ingredient>()
  constructor() { }

  ngOnInit() {
  }

  addIngredient(ingrInput, amountInput){
    if(ingrInput.value && amountInput.value){
      this.addIngredientEvent.emit({
        name: ingrInput.value,
        amount: amountInput.value
      })
      ingrInput.value = '';
      amountInput.value = '';
    }
  }
}
