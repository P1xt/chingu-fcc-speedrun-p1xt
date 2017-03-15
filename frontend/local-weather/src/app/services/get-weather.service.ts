import { Injectable }    from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';


@Injectable()
export class GetWeatherService {

  constructor(private http: Http) { }

  getWeather = (position) => {
    let apiUrl: string = 'http://api.openweathermap.org/data/2.5/weather';
    const lat = position.latitude;
    const lon = position.longitude;
    let params = new URLSearchParams();
    params.set('lat', lat);
    params.set('lon', lon);
    params.set('units', 'imperial');    
    params.set('APPID', '1c414177f9164fbde99db8c5c77ad359');  
    params.set('format', 'json');
    return this.http
            .get(apiUrl, { search: params })
            .map(response => response.json());
  }

}
