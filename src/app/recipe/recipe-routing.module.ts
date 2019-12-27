import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AuthGuard } from '../auth/auth.guard';
import { RecipeComponent } from './recipe.component';
import { UnselectedPageComponent } from '../pages/unselected-page/unselected-page.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';

const routes: Routes = [
  {path: 'recipes', canActivate: [AuthGuard], component: RecipeComponent, children: [
    {path: '', component: UnselectedPageComponent},
    {path: 'new', component: RecipeEditComponent},
    {path: ':recipeId', component: RecipeDetailComponent},
    {path: ':id/edit', component: RecipeEditComponent},
  ]},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipeRoutingModule { }
