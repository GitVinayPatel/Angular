import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipes.modle';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe:Recipe;

  @Output()  recipeSelected = new EventEmitter<void>();
  

  constructor() { }

  ngOnInit() {
  }
  onSelectedRecipe(){

    this.recipeSelected.emit();
  }

}
