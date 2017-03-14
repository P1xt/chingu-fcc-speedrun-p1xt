import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogConfig } from '@angular/material';
import { RecipeComponent } from '../recipe/recipe.component';
import { Recipe } from '../../classes/recipe';
@Component({
  selector: 'app-recipe-list',
  providers: [RecipeComponent],
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];
  maxRecipeId: number;
  config: MdDialogConfig = {
    disableClose: true,
    width: '',
    height: '',
    position: {
      top: '',
      bottom: '',
      left: '',
      right: ''
    },
    data: {
      
    }
  };
  constructor(public dialog: MdDialog) { }

  ngOnInit() {
    if (typeof window.localStorage["p1xtRecipeBook"] === 'undefined') {
      this.recipes = [
        { id: 1, name: 'Pumpkin Pie',  ingredients: ["Pumpkin Puree", "Sweetened Condensed Milk", "Eggs", "Pumpkin Pie Spice", "Pie Crust"]},
        { id: 2, name: "Spaghetti", ingredients: ["Noodles", "Tomato Sauce", "(Optional) Meatballs"]}, 
        { id: 3, name: "Onion Pie", ingredients: ["Onion", "Pie Crust"]}
      ];
      window.localStorage.setItem("p1xtRecipeBook", JSON.stringify(this.recipes));
    } else {
      this.recipes = JSON.parse(window.localStorage.getItem("p1xtRecipeBook"));
    }
    this.maxRecipeId = Math.max.apply(Math,this.recipes.map((a)=>a.id));
  }

  deleteRecipe(id) {
    for(var i = 0; i < this.recipes.length; i++) {
      if(this.recipes[i].id == id) {
          this.recipes.splice(i, 1);
          break;
      }
    } 
    window.localStorage.setItem("p1xtRecipeBook", JSON.stringify(this.recipes));
  }
  
  addRecipe() {
    this.maxRecipeId++;
    this.config.data = { id: this.maxRecipeId, name: "", ingredients: "" };
    let dialogRef = this.dialog.open(RecipeComponent, this.config);
      dialogRef.afterClosed().subscribe((result: {id, name, ingredients}) => {
        result.ingredients = result.ingredients.split(',');
        this.recipes.push(result);
        window.localStorage.setItem("p1xtRecipeBook", JSON.stringify(this.recipes));
    });
  }

  updateRecipe(id: number) {
    for(var i = 0; i < this.recipes.length; i++) {
      if(this.recipes[i].id == id) {
          this.config.data = { id: this.recipes[i].id, name: this.recipes[i].name, ingredients: this.recipes[i].ingredients.join(',') };
          let dialogRef = this.dialog.open(RecipeComponent, this.config);
            dialogRef.afterClosed().subscribe((result: {id, name, ingredients}) => {
              result.ingredients = result.ingredients.split(',');
              this.recipes[i] = result;
              window.localStorage.setItem("p1xtRecipeBook", JSON.stringify(this.recipes));
          });          
          break;
      }
    } 

  }
}
