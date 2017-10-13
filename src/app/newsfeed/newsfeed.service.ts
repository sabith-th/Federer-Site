import { Injectable } from '@angular/core';
import {Http, Response, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';



@Injectable()
export class NewsfeedService {

  private nytUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json`;

  constructor(private http: Http) { }

  getNews(page: number): Observable<Object[]> {
    let params: URLSearchParams = new URLSearchParams();
    // params.set('api-key', '?');
    params.set('q', 'federer');
    params.set('fq', 'headline.search:("federer")');
    params.set('fl','headline,byline,lead_paragraph,web_url')
    params.set('sort', 'newest');
    params.set('page', page.toString());

    return this.http.get(this.nytUrl, {search: params})
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(res: Response){
    let body = res.json().response.docs;
    // console.log(res.json().response.docs);
    return body || [];
  }

  private handleError(error: Response | any){
    let errMsg: string;
    if (error instanceof Response){
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    }else {
      errMsg = error.message ? error.message : error.toString();
    }

    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  

}
