export interface ICommentItemInterface {
  author: string;
  children: ICommentItemInterface[];
  created_at: string;
  created_at_i: number;
  options: [];
  parent_id: number;
  points: null;
  story_id: number;
  text: string;
  title: null;
  type: string;
  url: null;
  id: number;
}
