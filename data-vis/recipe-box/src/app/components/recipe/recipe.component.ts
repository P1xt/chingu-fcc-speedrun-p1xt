import {OnInit, Component, Inject, ViewChild, TemplateRef} from '@angular/core';
import {MdDialog, MdDialogRef, MdDialogConfig, MD_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent {

  constructor(
    public dialogRef: MdDialogRef<RecipeComponent>,
    @Inject(MD_DIALOG_DATA) public data: any) { }

}
