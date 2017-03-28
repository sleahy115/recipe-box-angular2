import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Recipe-box';
  recipes: Recipe[] = [
    new Recipe('Pizza',['crust', 'sauce', 'pepperoni'],['bake', 'enjoy']),
    new Recipe('Tacos',['tortillas', 'meat', 'seasoning'],['brown meat', 'add seasoning', 'put into totilla']),
    new Recipe('Pasta',['tomatoes', 'shrimp', 'seasoning'],['cook tomoatoes', 'add chicken', 'stir into pasta'])
  ];

  selectedRecipe: Recipe = null;

  editRecipe(clickedRecipe) {
    this.selectedRecipe = clickedRecipe;
  }

  finishedEditing() {
    this.selectedRecipe = null;
  }
}

export class Recipe {
  constructor(public title: string, public ingredients: string[], public directions: string[]) { }
}
