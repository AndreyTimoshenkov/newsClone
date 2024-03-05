import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ICommentItemInterface } from './commentItem.interface';
@Component({
  selector: 'app-comment-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.less'],
})
export class CommentItemComponent {
  @Input() comment?: ICommentItemInterface;
}
