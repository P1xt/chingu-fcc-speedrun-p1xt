import { Injectable }    from '@angular/core';
import { Http, Headers, Response } from '@angular/http';


@Injectable()
export class GetWikipediaService {

  constructor(private http: Http) { }

  searchWiki = (query) => {
    let headers = new Headers();
    headers.append('Api-User-Agent', 'Example/1.0');
    let apiUrl: string = 'https://en.wikipedia.org/w/api.php?format=json&origin=*&action=query&generator=search&prop=extracts|info&inprop=url&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch='+query;

    return this.http
            .get(apiUrl, headers)
            .map(response => response.json());
  }
}
