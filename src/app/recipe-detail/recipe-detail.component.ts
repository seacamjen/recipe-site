import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
  providers: [RecipeService]
})
export class RecipeDetailComponent implements OnInit {
  recipeId: string;
  recipeToDisplay;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private recipeService: RecipeService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.recipeId = urlParameters['id'];
    });
    this.recipeToDisplay = this.recipeService.getRecipeById(this.recipeId);
  }

}
