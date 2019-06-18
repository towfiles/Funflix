import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GallerySearchPageComponent} from './gallery-search-page.component';
import { MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatDividerModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import {GallerySearchPageRouteModule} from './gallery-search-page-route.module';

@NgModule({
  imports: [
      CommonModule,
      MatCardModule,
      MatButtonModule,
      MatFormFieldModule,
      MatInputModule,
      MatDividerModule,
      FlexLayoutModule,
      GallerySearchPageRouteModule
  ],
  declarations: [GallerySearchPageComponent],
    exports: [GallerySearchPageComponent],
})
export class GallerySearchPageModule {
    constructor(){
    }
}
