import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import {GalleryModule} from './modules/gallery/gallery.module';
import { FlexLayoutModule } from '@angular/flex-layout';


//services
import {MoviesService} from './services/movies.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
      HttpClientModule,
      FlexLayoutModule,
      GalleryModule

  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
