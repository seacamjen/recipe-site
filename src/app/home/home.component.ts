import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [RecipeService]
})
export class HomeComponent implements OnInit {
  recipes: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private recipeService: RecipeService) { }

  goToDetailPage(clickedRecipe) {
     this.router.navigate(['recipes', clickedRecipe.$key]);
   };

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

}
