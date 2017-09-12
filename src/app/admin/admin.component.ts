import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [RecipeService]
})
export class AdminComponent implements OnInit {

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  submitForm(Name: string, Description: string, Ingredients: string, Directions: string, Comments: string, Categories: string, Url: string, Meal: string) {
    var newRecipe: Recipe = new Recipe(Name, Description, Ingredients, Directions, Comments, Categories, Url, Meal);
    this.recipeService.addRecipe(newRecipe);
  }

}
