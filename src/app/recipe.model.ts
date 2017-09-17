export class Recipe {
  constructor (public name: string, public description: string, public ingredients: string, public directions: string, public comments: string, public categories: Array<string>, public url: string, public meal: string) { }
}
