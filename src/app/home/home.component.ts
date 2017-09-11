import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Chicken Stuffed", "Seared Chicken", "chicken, salt, pepper", "cook on stove top, add spices, heat to desired temperature", "this is best cooked at high heat then low heat", "Whole 30", "www.usfutbolnow.us", "dinner", 0),
    new Recipe("Lasagna", "Fresh Lasagna", "noodles, sauce, meat, cheese", "soften noodles, add in layers, bake for a while", "low heat for a long amout of time to perfection", "Carb loading", "www.food.com", "dinner", 1)
  ];

  goToDetailPage(clickedRecipe: Recipe) {
     this.router.navigate(['recipe', clickedRecipe.id]);
   };

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
