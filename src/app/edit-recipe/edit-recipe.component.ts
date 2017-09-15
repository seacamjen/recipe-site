import { Component, Input, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css'],
  providers: [RecipeService]
})
export class EditRecipeComponent implements OnInit {
  @Input() selectedRecipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  beginUpdatingRecipe(recipeToUpdate) {
    this.recipeService.updateRecipe(recipeToUpdate);
  }

}
