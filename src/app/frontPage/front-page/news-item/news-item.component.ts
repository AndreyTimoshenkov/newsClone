import { Component, Input, OnChanges } from '@angular/core';
import { INews } from '../interfaces/news.interface';

@Component({
  standalone: true,
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.less'],
})
export class NewsItemComponent implements OnChanges {
  @Input() newsItem!: INews;
  @Input() index!: number;

  ngOnChanges(): void {
    console.log(this.newsItem.url);
  }
}
