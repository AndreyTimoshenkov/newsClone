import { Component, Input, OnChanges } from '@angular/core';
import { INews } from '../interfaces/news.interface';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.less'],
  imports: [RouterLink],
})
export class NewsItemComponent implements OnChanges {
  @Input() newsItem!: INews;
  @Input() index!: number;
  @Input() hitsPerPage!: number;
  @Input() page!: number;

  ngOnChanges(): void {
    console.log(this.page, this.hitsPerPage);
  }

  getIndex(index: number) {
    return this.hitsPerPage * this.page + index + 1;
  }
}
