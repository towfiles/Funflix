import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatButtonModule, MatFormFieldModule, MatDividerModule, MatChipsModule, MatIconModule } from '@angular/material';
import {MoviePageComponent} from './movie-page.component';
import {MoviePageRouteModule} from './movie-page-route.module';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
      MoviePageRouteModule,
      MatCardModule,
      MatButtonModule,
      MatFormFieldModule,
      MatDividerModule,
      MatChipsModule,
      MatIconModule,
      FlexLayoutModule

  ],
  declarations: [MoviePageComponent],
    exports: [MoviePageComponent],
})
export class MoviePageModule {

}
