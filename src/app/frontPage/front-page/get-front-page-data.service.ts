import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IFrontPage } from './interfaces/front-page.interface';

@Injectable({
  providedIn: 'root',
})
export class GetFrontPageDataService {
  tap() {
    throw new Error('Method not implemented.');
  }
  constructor(private http: HttpClient) {}

  private baseUrl = 'http://hn.algolia.com/api/v1/search?tags=front_page';

  getNews(hitsPerPage: number, index: number): Observable<IFrontPage> {
    let newsUrl = `${this.baseUrl}&hitsPerPage=${hitsPerPage}&page=${index}`;
    return this.http.get<IFrontPage>(newsUrl);
  }
}
