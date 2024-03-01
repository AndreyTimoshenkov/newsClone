import { INews } from './news.interface';

export interface IFrontPage {
  exhaustive: object;
  exhaustiveNbHits: Boolean;
  exhaustiveTypo: Boolean;
  hits: Array<INews>;
  hitsPerPage: number;
  nbHits: number;
  nbPages: number;
  page: number;
  params: string;
  processingTimeMS: number;
  processingTimingsMS: object;
  query: string;
  serverTimeMS: number;
}
