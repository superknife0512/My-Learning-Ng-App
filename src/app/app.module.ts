import { ShoppingModule } from './shopping-list/shopping.module';
import { RecipeModule } from './recipe/recipe.module';
import { AppRoutingModule } from './appRouting.module';
import { AuthInterceptorService } from './auth/interceptor.service';
import { AppLoadingSpinner } from './UI/loading-spinner/spinner.component';
import { RecipeService } from './shared/recipe.service';
import { ShoppingService } from './shared/shopping.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './UI/header/header.component';
import { UnselectedPageComponent } from './pages/unselected-page/unselected-page.component';
import { AuthComponent } from './auth/auth.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UnselectedPageComponent,
    AuthComponent,
    AppLoadingSpinner
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    RecipeModule,
    ShoppingModule
  ],
  providers: [
    ShoppingService,
    RecipeService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
