import { ShoppingValidations } from './../../shared/Validation';
import { RecipeService } from './../../shared/recipe.service';
import { FormGroup, FormControl, Validators, FormArray, AbstractControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit {
  id: string;
  isEdit: boolean = false;
  recipeForm: FormGroup;

  constructor(private curRoute: ActivatedRoute, private recipeService : RecipeService) { }

  ngOnInit() {
    this.curRoute.params.subscribe((params)=>{
      if(params['id']) {
        this.id = params['id']
        this.isEdit = true;
      }
      this._initForm();
    })
  }

  private _initForm() {
    let recipeName = null, desc = null, imgUrl = null;
    let ingredients: FormGroup[] = [];

    if(this.isEdit){
      const recipe = this.recipeService.getRecipeById(this.id);
      recipeName = recipe.name;
      desc = recipe.desc;
      imgUrl = recipe.imgUrl;
      ingredients = recipe.ingredients.map(ingr=>{
        return new FormGroup({
          'name': new FormControl(ingr.name, [Validators.required]),
          'amount': new FormControl(ingr.amount, [Validators.required, ShoppingValidations.validNumber])
        })
      })
    }
    this.recipeForm = new FormGroup({
      'recipeName': new FormControl(recipeName, Validators.required),
      'desc': new FormControl(desc, Validators.required),
      'imgUrl': new FormControl(imgUrl, Validators.required),
      'ingredients': new FormArray(ingredients)
    })
  }

  onSubmit() {
    console.log(this.recipeForm);
  }

  getIngredientControls(): AbstractControl[] {
    return (this.recipeForm.get('ingredients') as FormArray).controls
  }

  onAddIngredientControl(){
    const ingredientControls = (this.recipeForm.get('ingredients') as FormArray);
    const newControl = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'amount': new FormControl(null, Validators.required)
    })
    ingredientControls.push(newControl)
  }
}
