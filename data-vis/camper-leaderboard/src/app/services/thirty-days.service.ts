import { Injectable }    from '@angular/core';
import { Http, Response } from '@angular/http';
import { Camper } from '../classes/camper';

@Injectable()
export class ThirtyDaysService {

  constructor(private http: Http) { }

  getCampers = () => {
    let apiUrl: string = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent';
        return this.http
               .get(apiUrl)
               .map(response => response.json());
  }
}
