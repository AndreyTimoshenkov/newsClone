import { Component } from '@angular/core';
import { GetDataService } from './get-data.service';
import { NewsItemComponent } from './news-item/news-item.component';
import { INews } from '../front-page/interfaces/news.interface';
import { BehaviorSubject, Observable, map, switchMap, tap } from 'rxjs';
import { AsyncPipe, NgForOf } from '@angular/common';
import { TuiLoaderModule } from '@taiga-ui/core';
import { HeaderComponent } from 'src/app/header/header.component';
import { TuiPaginationModule } from '@taiga-ui/kit';

@Component({
  standalone: true,
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.less'],
  imports: [
    NewsItemComponent,
    AsyncPipe,
    NgForOf,
    TuiLoaderModule,
    HeaderComponent,
    TuiPaginationModule,
  ],
})
export class FrontPageComponent {
  loader: boolean;
  hitsPerPage: number = 13;
  length: number;
  currentPage: BehaviorSubject<number> = new BehaviorSubject(0);
  index: number = 0;

  constructor(private data: GetDataService) {
    this.length = Math.ceil(30 / this.hitsPerPage);
    this.loader = true;
  }

  newsItems: Observable<INews[]> = this.currentPage.pipe(
    tap(() => (this.loader = true)),
    switchMap((value) => this.data.getNews(this.hitsPerPage, value)),
    map((response) => response.hits),
    tap(() => (this.loader = false))
  );

  goToPage(index: number): void {
    this.currentPage.next(index);
  }
}
