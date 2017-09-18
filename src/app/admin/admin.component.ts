import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { Ingredients } from '../ingredients';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [RecipeService]
})
export class AdminComponent implements OnInit {
  public myForm: FormGroup;

  constructor(private recipeService: RecipeService, private _fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this._fb.group({
            ingredients: this._fb.array([
                this.initIngredient(),
            ])
        });
  }

  initIngredient(){
    return this._fb.group({
            quantity: [''],
            quantityType: [''],
            ingredient: ['']
        });
  }

  addIngredient() {
    // add Ingredient to the list
    const control = <FormArray>this.myForm.controls['ingredients'];
    control.push(this.initIngredient());
  }

  removeIngredient(i: number) {
      // remove Ingredient from the list
      const control = <FormArray>this.myForm.controls['ingredients'];
      control.removeAt(i);
    }

  save(model: Ingredients) {
    console.log(model);
  }

  submitForm(Name: string, Description: string, Ingredients: string, Directions: string, Comments: string, Categories: Array<string>, Url: string, Meal: string) {
    var newRecipe: Recipe = new Recipe(Name, Description, Ingredients, Directions, Comments, Categories, Url, Meal);
    this.recipeService.addRecipe(newRecipe);
  }

}
