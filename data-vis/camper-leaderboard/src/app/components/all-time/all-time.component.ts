import { Component, OnInit } from '@angular/core';
import { Camper } from '../../classes/camper';
import { AllTimeService } from '../../services/all-time.service';

@Component({
  selector: 'app-all-time',
  templateUrl: './all-time.component.html',
  styleUrls: ['./all-time.component.scss']
})
export class AllTimeComponent implements OnInit {
  campers: Camper[];
  constructor(private allTimeService: AllTimeService) { }

  ngOnInit() {
    this.allTimeService.getCampers()
      .subscribe(campers => this.campers = campers.sort((a,b) => b.alltime - a.alltime ));
  }
}
