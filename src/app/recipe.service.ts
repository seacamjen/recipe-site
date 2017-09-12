import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class RecipeService {
  recipes: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.recipes = database.list('recipes');
  }

  getRecipes() {
    return this.recipes;
  }

  addRecipe(newRecipe: Recipe) {
    this.recipes.push(newRecipe);
  }

  getRecipeById(recipeId: number) {
    // for (var i = 0; i <= RECIPES.length -1; i++) {
    //   if (RECIPES[i].id === recipeId) {
    //     return RECIPES[i];
    //   }
    // }
  }

}
