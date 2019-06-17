import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {MoviePageComponent} from './movie-page.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: MoviePageComponent}
        ])
    ],
  declarations: [],
    exports: [RouterModule]
})
export class MoviePageRouteModule { }
