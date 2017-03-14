import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { MdDialog } from '@angular/material';
import { AppComponent } from './components/app.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { Recipe } from './classes/recipe';

@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    RecipeComponent
  ],
  entryComponents: [RecipeComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
