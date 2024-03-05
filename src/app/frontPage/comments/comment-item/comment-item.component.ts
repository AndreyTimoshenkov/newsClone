import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ICommentItemInterface } from './commentItem.interface';

@Component({
  selector: 'app-comment-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.less'],
})
export class CommentItemComponent implements OnChanges {
  @Input() comments?: ICommentItemInterface[] | undefined;
  @Input() comment?: ICommentItemInterface | undefined;

  ngOnChanges(): void {
    console.log(this.comment?.author);
  }
}
