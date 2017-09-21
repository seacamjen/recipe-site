import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredients } from './ingredients';
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

  addRecipe(newRecipe: Ingredients) {
    this.recipes.push(newRecipe);
  }

  getRecipeById(recipeId: string) {
    return this.database.object('recipes/' + recipeId);
  }

  updateRecipe(localUpdatedRecipe) {
    var recipeEntryInFirebase = this.getRecipeById(localUpdatedRecipe.$key);
    recipeEntryInFirebase.update({name: localUpdatedRecipe.name,
                                  description: localUpdatedRecipe.description,
                                  ingredients: localUpdatedRecipe.ingredients,
                                  directions: localUpdatedRecipe.directions,
                                  comments: localUpdatedRecipe.comments,
                                  categories: localUpdatedRecipe.categories,
                                  url: localUpdatedRecipe.url,
                                  meal: localUpdatedRecipe.meal
                                });
  }

  deleteRecipe(localRecipeToDelete) {
    var recipeEntryInFirebase = this.getRecipeById(localRecipeToDelete.$key);
    recipeEntryInFirebase.remove();
  }

}
