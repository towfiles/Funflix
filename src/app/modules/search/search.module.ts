import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import {

    MatIconModule, MatInputModule,
    MatAutocompleteModule, MatChipsModule,
    MatFormFieldModule, MatSelectModule


} from '@angular/material';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
      MatIconModule,
      MatInputModule,
      MatAutocompleteModule,
      MatChipsModule,
      MatFormFieldModule,
      MatSelectModule,
      AngularMultiSelectModule,
      FormsModule

  ],
  declarations: [SearchComponent],
    exports : [SearchComponent]
})
export class SearchModule { }
