import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontPageComponent } from './frontPage/front-page/front-page.component';

const routes: Routes = [
  {
    path: '',
    component: FrontPageComponent,
    title: 'Home page',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
