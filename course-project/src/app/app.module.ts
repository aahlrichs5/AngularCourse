import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { HeaderComponent } from './Header/header.component';
import { RecipeDetailComponent } from './Header/RecipeBook/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './Header/RecipeBook/recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeListComponent } from './Header/RecipeBook/recipes/recipe-list/recipe-list.component';
import { RecipesComponent } from './Header/RecipeBook/recipes/recipes.component';
import { IngredientComponent } from './Header/ShoppingList/ingredient/ingredient.component';
import { ShoppingEditComponent } from './Header/ShoppingList/shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './Header/ShoppingList/shopping-list/shopping-list.component';
import { ShoppingListService } from './Header/ShoppingList/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipeEditComponent } from './Header/RecipeBook/recipes/recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './Header/RecipeBook/recipes/recipe-start/recipe-start.component';

@NgModule({
  declarations: [
    AppComponent,
    DropdownDirective,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    IngredientComponent,
    ShoppingEditComponent,
    ShoppingListComponent,
    RecipeStartComponent,
    RecipeEditComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [ShoppingListService],
  bootstrap: [AppComponent],
})
export class AppModule {}
