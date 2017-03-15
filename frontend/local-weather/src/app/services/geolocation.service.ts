import { Injectable }    from '@angular/core';
import { Http, Response, Jsonp, URLSearchParams } from '@angular/http';


@Injectable()
export class GeolocationService {

  constructor(private jsonp: Jsonp) { }


  getLocation = (position) => {
    let apiUrl: string = 'http://freegeoip.net/json';
    let params = new URLSearchParams();
    params.set('callback', 'JSONP_CALLBACK');     
        return this.jsonp
               .get(apiUrl, { search: params })
               .map(response => response.json());
  }
}
