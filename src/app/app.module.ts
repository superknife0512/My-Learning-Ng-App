import { AuthInterceptorService } from './auth/interceptor.service';
import { AppLoadingSpinner } from './UI/loading-spinner/spinner.component';
import { RecipeService } from './shared/recipe.service';
import { ShoppingService } from './shared/shopping.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shopping-list/shopping-list-edit/shopping-list-edit.component';
import { HeaderComponent } from './UI/header/header.component';
import { UnselectedPageComponent } from './pages/unselected-page/unselected-page.component';
import { RecipeEditComponent } from './recipe/recipe-edit/recipe-edit.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {path: 'auth', component: AuthComponent},
  {path: 'recipes', component: RecipeComponent, children: [
    {path: '', component: UnselectedPageComponent},
    {path: 'new', component: RecipeEditComponent},
    {path: ':recipeId', component: RecipeDetailComponent},
    {path: ':id/edit', component: RecipeEditComponent},
  ]},
  {path: 'shopping-list', component: ShoppingListComponent, children: [
    {path: ':id', component: ShoppingListComponent}
  ]}
];

@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    HeaderComponent,
    UnselectedPageComponent,
    RecipeEditComponent,
    AuthComponent,
    AppLoadingSpinner
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ShoppingService, RecipeService, {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
