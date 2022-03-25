import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeDetailComponent } from './Header/RecipeBook/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './Header/RecipeBook/recipes/recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './Header/RecipeBook/recipes/recipe-start/recipe-start.component';
import { RecipesComponent } from './Header/RecipeBook/recipes/recipes.component';
import { ShoppingListComponent } from './Header/ShoppingList/shopping-list/shopping-list.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipies', pathMatch: 'full' },
  {
    path: 'recipies',
    component: RecipesComponent,
    children: [
      { path: '', component: RecipeStartComponent },
      { path: 'new', component: RecipeEditComponent },
      { path: ':id', component: RecipeDetailComponent },
      { path: ':id/edit', component: RecipeEditComponent },
    ],
  },
  { path: 'shopping-list', component: ShoppingListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
