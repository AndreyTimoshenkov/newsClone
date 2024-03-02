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

  private newsUrl = 'http://hn.algolia.com/api/v1/search?tags=front_page';

  getNews(): Observable<IFrontPage> {
    return this.http.get<IFrontPage>(this.newsUrl);
  }
}
