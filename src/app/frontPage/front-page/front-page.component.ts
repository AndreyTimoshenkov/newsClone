import { Component } from '@angular/core';
import { GetFrontPageDataService } from './get-front-page-data.service';
import { NewsItemComponent } from './news-item/news-item.component';
import { INews } from '../front-page/interfaces/news.interface';
import { Observable, map } from 'rxjs';
import { AsyncPipe, NgForOf } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.less'],
  imports: [NewsItemComponent, AsyncPipe, NgForOf],
})
export class FrontPageComponent {
  newsItems: Observable<INews[]> = this.data
    .getNews()
    .pipe(map((res) => res.hits));

  constructor(private data: GetFrontPageDataService) {
    this.newsItems.subscribe((item) => console.log(item));
  }
}
