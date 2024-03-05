import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { IFrontPage } from './interfaces/front-page.interface';
import { INews } from './interfaces/news.interface';

@Injectable({
  providedIn: 'root',
})
export class GetDataService {
  tap() {
    throw new Error('Method not implemented.');
  }
  constructor(private http: HttpClient) {}

  private frontPageUrl = 'http://hn.algolia.com/api/v1/search?tags=front_page';
  private itemUrl = 'https://hn.algolia.com/api/v1/items/';

  getNews(hitsPerPage: number, index: number): Observable<IFrontPage> {
    // let page = index.value;
    console.log(index);
    let url = `${this.frontPageUrl}&hitsPerPage=${hitsPerPage}&page=${index}`;
    return this.http.get<IFrontPage>(url);
  }

  getNewsItem(itemId: string): Observable<INews> {
    let url = `${this.itemUrl}${itemId}`;
    console.log(url);
    return this.http.get<INews>(url);
  }
}
