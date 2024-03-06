import { Component, Input } from '@angular/core';
import { INews } from '../../interfaces/news.interface';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.less'],
  imports: [RouterLink],
})
export class NewsItemComponent {
  @Input() newsItem!: INews;
  @Input() index!: number;
  @Input() hitsPerPage!: number;
  @Input() page!: number;

  calculateIndex(index: number) {
    return this.hitsPerPage * this.page + index + 1;
  }
}
