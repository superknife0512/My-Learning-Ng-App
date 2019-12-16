
import { ShoppingValidations } from './../../shared/Validation';
import { RecipeService } from './../../shared/recipe.service';
import { FormGroup, FormControl, Validators, FormArray, AbstractControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit {
  id: string;
  isEdit: boolean = false;
  recipeForm: FormGroup;

  constructor(private curRoute: ActivatedRoute, 
              private recipeService : RecipeService,
              private router: Router) { }

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
    let name = null, desc = null, imgUrl = null;
    let ingredients: FormGroup[] = [];

    if(this.isEdit){
      const recipe = this.recipeService.getRecipeById(this.id);
      name = recipe.name;
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
      'name': new FormControl(name, Validators.required),
      'desc': new FormControl(desc, Validators.required),
      'imgUrl': new FormControl(imgUrl, Validators.required),
      'ingredients': new FormArray(ingredients)
    })
  }

  onSubmit() {
    if(!this.isEdit){
      this.recipeService.createNewRecipe(this.recipeForm.value)
    } else {
      this.recipeService.updateRecipeById(this.id, this.recipeForm.value);
    }
    this.clearForm();
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

  deleteIngredientControl(index: number){
    (this.recipeForm.get('ingredients') as FormArray).removeAt(index);
  }
  
  clearForm(){
    this.recipeForm.reset();
    this.isEdit = false
    this.router.navigate(['../'], {relativeTo: this.curRoute})
  }
}
