import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontPageComponent } from './frontPage/front-page/front-page.component';
import { CommentsComponent } from './frontPage/comments/comments.component';

const routes: Routes = [
  {
    path: '',
    component: FrontPageComponent,
    title: 'Front Page | HN Clone App',
  },
  {
    path: 'items/:id',
    component: CommentsComponent,
    title: 'Comments | HN Clone App',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
