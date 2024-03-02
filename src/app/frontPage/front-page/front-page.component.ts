import { Component } from '@angular/core';
import { GetFrontPageDataService } from './get-front-page-data.service';
import { NewsItemComponent } from './news-item/news-item.component';
import { INews } from '../front-page/interfaces/news.interface';
import { Observable, map, tap } from 'rxjs';
import { AsyncPipe, NgForOf } from '@angular/common';
import { TuiLoaderModule } from '@taiga-ui/core';
import { HeaderComponent } from 'src/app/header/header.component';

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
  ],
})
export class FrontPageComponent {
  loader: boolean;

  newsItems: Observable<INews[]> = this.data
    .getNews()
    .pipe(tap(() => (this.loader = true)))
    .pipe(map((response) => response.hits))
    .pipe(tap(() => (this.loader = false)));

  constructor(private data: GetFrontPageDataService) {
    // this.newsItems.subscribe((item) => console.log(item));
    this.loader = true;
  }
}
