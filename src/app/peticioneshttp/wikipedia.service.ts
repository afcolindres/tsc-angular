import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {

  constructor( private http: HttpClient) { }

  searc(term: string){
    return this.http.get('https://es.wikipedia.org/w/api.php',{
      params:{
        action:'query',
        format: 'json',
        list: 'search',
        utf8: '1',
        srsearch: term,
        origin:'*'
      }
    });
  }

}