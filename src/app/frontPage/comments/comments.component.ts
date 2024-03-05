import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Location, NgForOf } from '@angular/common';
import { TuiButtonModule, TuiLoaderModule } from '@taiga-ui/core';
import { GetDataService } from '../front-page/get-data.service';
import { switchMap, tap } from 'rxjs';
import { INews } from '../front-page/interfaces/news.interface';

@Component({
  standalone: true,
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.less'],
  imports: [RouterModule, TuiButtonModule, TuiLoaderModule, NgForOf],
})
export class CommentsComponent {
  clickBack() {
    this._location.back();
  }

  loader: boolean;

  newsItem: INews | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private _location: Location,
    private data: GetDataService
  ) {
    this.loader = true;
    this.activatedRoute.params
      .pipe(
        switchMap((params) => this.data.getNewsItem(params['id'] as string))
      )
      .pipe(tap(() => (this.loader = false)))
      // .pipe(
      // 	takeUntilDestroyed(),
      // 	catchError((err: HttpErrorResponse) => {
      // 		this.alertService.showNotification(err);
      // 		return of(null);
      // 	})
      // )
      .subscribe((data) => (this.newsItem = data));
  }
}
