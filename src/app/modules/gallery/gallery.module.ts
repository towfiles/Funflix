import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GalleryComponent} from './gallery.component';
import { MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
      BrowserAnimationsModule,
      MatCardModule,
      MatButtonModule,
      MatFormFieldModule,
      MatInputModule,
      FlexLayoutModule
  ],
  declarations: [GalleryComponent],
  exports: [GalleryComponent],
})
export class GalleryModule { }
