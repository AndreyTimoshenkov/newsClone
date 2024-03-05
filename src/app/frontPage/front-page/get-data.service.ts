import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IFrontPage } from './interfaces/front-page.interface';
import { INews } from './interfaces/news.interface';
import { ErrorAlertService } from './error-alert.service';

@Injectable({
  providedIn: 'root',
})
export class GetDataService {
  constructor(private http: HttpClient, private alerts: ErrorAlertService) {}

  private frontPageUrl = 'http://hn.algolia.com/api/v1/search?tags=front_page';
  private itemUrl = 'https://hn.algolia.com/api/v1/items/';

  getNews(hitsPerPage: number, index: number | null): Observable<IFrontPage> {
    let url = `${this.frontPageUrl}&hitsPerPage=${hitsPerPage}&page=${index}`;
    return this.http.get<IFrontPage>(url);
  }

  getNewsItem(itemId: string): Observable<INews> {
    let url = `${this.itemUrl}${itemId}`;
    console.log(url);
    return this.http.get<INews>(url);
  }
}
