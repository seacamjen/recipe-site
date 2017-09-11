import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Router } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [RecipeService]
})
export class HomeComponent implements OnInit {
  recipes: Recipe [];

  constructor(private router: Router, private recipeService: RecipeService) { }

  goToDetailPage(clickedRecipe: Recipe) {
     this.router.navigate(['recipe', clickedRecipe.id]);
   };

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

}
