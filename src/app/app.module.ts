import { TuiRootModule } from '@taiga-ui/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontPageComponent } from './frontPage/front-page/front-page.component';
import { HttpClientModule } from '@angular/common/http';
import { NewsItemComponent } from './frontPage/front-page/news-item/news-item.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TuiRootModule,
    HttpClientModule,
    FrontPageComponent,
    NewsItemComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
