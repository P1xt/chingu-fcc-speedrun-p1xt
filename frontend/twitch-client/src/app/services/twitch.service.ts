import { Injectable }    from '@angular/core';
import { Http, Headers, Response, Jsonp, URLSearchParams } from '@angular/http';


@Injectable()
export class GetTwitchService {

  constructor(private json: Jsonp) { }

  getStreamer = (streamer) => {
    let params = new URLSearchParams();
    params.set('callback', 'JSONP_CALLBACK');   
    let apiUrl: string = 'https://wind-bow.gomix.me/twitch-api/users/'+streamer;

    return this.json
            .get(apiUrl, { search: params })
            .map(response => response.json());
  }
  getStream = (streamer) => {
    let params = new URLSearchParams();
    params.set('callback', 'JSONP_CALLBACK');   
    let apiUrl: string = 'https://wind-bow.gomix.me/twitch-api/streams/'+streamer;

    return this.json
            .get(apiUrl, { search: params })
            .map(response => response.json());
  }  
}
