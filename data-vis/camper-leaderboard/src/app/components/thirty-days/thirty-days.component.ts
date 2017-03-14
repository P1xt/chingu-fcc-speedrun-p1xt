import { Component, OnInit } from '@angular/core';
import { Camper } from '../../classes/camper';
import { ThirtyDaysService } from '../../services/thirty-days.service';
import { Observable }       from 'rxjs/Observable';
@Component({
  selector: 'app-thirty-days',
  providers: [ ThirtyDaysService ],
  templateUrl: './thirty-days.component.html',
  styleUrls: ['./thirty-days.component.scss']
})
export class ThirtyDaysComponent implements OnInit {
  campers: Camper[];
  constructor(private thirtyDaysService: ThirtyDaysService) { }

  ngOnInit() {
    this.thirtyDaysService.getCampers()
      .subscribe(campers => this.campers = campers.sort((a,b) => b.recent - a.recent ));
  }

}

