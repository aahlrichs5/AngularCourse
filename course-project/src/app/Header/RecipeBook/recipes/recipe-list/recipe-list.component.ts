import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'This is a test',
      'https://cdn.pixabay.com/photo/2020/10/21/19/17/soup-5674071_1280.jpg'
    ),
    new Recipe(
      'Test Recipe #2',
      'This is a test #2',
      'https://cdn.pixabay.com/photo/2020/10/21/19/17/soup-5674071_1280.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
