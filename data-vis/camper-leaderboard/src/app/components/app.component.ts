import { Component } from '@angular/core';
import { Camper } from '../classes/camper';
import { ThirtyDaysService } from '../services/thirty-days.service';
import { Observable }       from 'rxjs/Observable';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';
}
