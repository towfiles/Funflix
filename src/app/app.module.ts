import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatToolbar, MatIconModule} from '@angular/material';
import {SearchModule} from './modules/search/search.module';
import {AppRouteModule} from './app-route.module';



import {GalleryModule} from './modules/gallery/gallery.module';



//services
import {MoviesService} from './services/movies.service';

@NgModule({
  declarations: [
    AppComponent,
      MatToolbar
  ],
  imports: [
    BrowserModule,
      HttpClientModule,
      FlexLayoutModule,
      GalleryModule,
      MatIconModule,
      AppRouteModule,
      SearchModule


  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
