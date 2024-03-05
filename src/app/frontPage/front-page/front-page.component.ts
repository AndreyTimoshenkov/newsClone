import { Component } from '@angular/core';
import { GetDataService } from './get-data.service';
import { NewsItemComponent } from './news-item/news-item.component';
import { INews } from '../front-page/interfaces/news.interface';
import {
  BehaviorSubject,
  Observable,
  catchError,
  map,
  of,
  switchMap,
  tap,
} from 'rxjs';
import { AsyncPipe, NgForOf } from '@angular/common';
import { TuiLoaderModule } from '@taiga-ui/core';
import { HeaderComponent } from 'src/app/header/header.component';
import { TuiPaginationModule } from '@taiga-ui/kit';
import { ErrorAlertService } from './error-alert.service';
import { HttpErrorResponse } from '@angular/common/http';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { IFrontPage } from './interfaces/front-page.interface';

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
  length: Observable<number>;
  currentPage: BehaviorSubject<number> = new BehaviorSubject(0);
  index: number = 0;

  constructor(private data: GetDataService, private alerts: ErrorAlertService) {
    this.length = this.data
      .getNews(this.hitsPerPage, this.index)
      .pipe(map((response: IFrontPage) => response.nbPages));

    this.loader = true;
  }

  newsItems$: Observable<INews[] | null> = this.currentPage.pipe(
    tap(() => (this.loader = true)),

    switchMap((value) => this.data.getNews(this.hitsPerPage, value)),
    map((response) => response.hits),
    tap(() => (this.loader = false)),
    takeUntilDestroyed(),
    catchError((err: HttpErrorResponse) => {
      console.error(err.status);
      this.alerts.showNotification(err);
      return of(null);
    })
  );

  goToPage(index: number): void {
    this.currentPage.next(index);
  }
}
