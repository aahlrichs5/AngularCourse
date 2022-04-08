import { Injectable } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../ShoppingList/shopping-list.service';
import { Recipe } from './recipes/recipes.model';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'This is a test',
      'https://cdn.pixabay.com/photo/2020/10/21/19/17/soup-5674071_1280.jpg',
      [new Ingredient('Fries', 20), new Ingredient('Potato', 2)]
    ),
    new Recipe(
      'Test Recipe #2',
      'This is a test #2',
      'https://cdn.pixabay.com/photo/2020/10/21/19/17/soup-5674071_1280.jpg',
      [new Ingredient('Tomato', 6), new Ingredient('Chicken', 5)]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredientsFromRecipe(ingredients);
  }
}
