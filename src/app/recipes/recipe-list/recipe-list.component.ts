import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Array<Recipe> = [
    new Recipe(
      'Mango Shake',
      '1 glass of milk and 1 mango',
      'https://cdn.pixabay.com/photo/2016/04/21/18/53/mango-1344270_1280.jpg'
    ),
  ];
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
