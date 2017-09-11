import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { RECIPES } from './mock-recipes';

@Injectable()
export class RecipeService {

  constructor() { }

  getRecipes() {
    return RECIPES;
  }

}
