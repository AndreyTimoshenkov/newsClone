import { ICommentItemInterface } from './commentItem.interface';

export interface INews {
  author: string;
  children: Array<ICommentItemInterface>;
  created_at: string;
  created_at_i: number;
  num_comments: number;
  objectID: string;
  points: number;
  story_id: number;
  title: string;
  updated_at: string;
  url: string;
  _highlightResult: object;
  _tags: Array<string>;
}
