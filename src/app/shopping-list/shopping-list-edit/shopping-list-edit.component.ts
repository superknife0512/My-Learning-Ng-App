import { Ingredient } from './../../shared/ingredient.model';
import { ShoppingValidations } from './../../shared/Validation';
import { ShoppingService } from './../../shared/shopping.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.scss']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  shoppingForm: FormGroup;
  editSub: Subscription;
  isEdit: boolean = false;
  editItemIndex: number;

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
    this.shoppingForm = new FormGroup({
      'ingredient': new FormControl(null, Validators.required),
      'amount': new FormControl(null, [Validators.required, ShoppingValidations.validNumber])
    })
    this.editSub = this.shoppingService.editingChoice
      .subscribe((value)=>{
        this.isEdit = true;
        this.editItemIndex = value;
        const ingr: Ingredient = this.shoppingService.getIngredient(value);
        this.shoppingForm.setValue({
          'ingredient': ingr.name,
          'amount': ingr.amount
        })

      }, err=> {
        console.log(err);
      })
  }

  ngOnDestroy(){
    this.editSub.unsubscribe();
  }

  onSubmit(){
    const newIngr = new Ingredient(this.getControl('ingredient').value, this.getControl('amount').value);    
    if(!this.isEdit) {
      if(this.shoppingForm.valid){
        this.shoppingService.addIngredient(newIngr)
      }
    } else {
      this.shoppingService.setIngredient(this.editItemIndex, newIngr)
    }
    this.onClear();
  }

  onDelete(){
    this.shoppingService.deleteIngredient(this.editItemIndex);
    this.onClear();
  }

  onClear(){
    this.shoppingForm.reset();
    this.isEdit = false;
  }

  getControl(field: string): AbstractControl{
    return this.shoppingForm.get(field);
  }
}
