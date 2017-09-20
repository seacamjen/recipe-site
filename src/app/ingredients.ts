export interface Ingredients {
  name: string;
  description: string;
  ingredients: Ingredient[];
  directions: Direction[];
  comment: string;
  categories: Category[];
  url: string;
  meal: string;
}

export interface Ingredient {
    amount: number;
    amountType: string;
    item: string;
}

export interface Direction {
  step: string;
}

export interface Category {
  genre: string;
}
