import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GalleryComponent} from './modules/gallery/gallery.component';
import {GallerySearchPageModule} from './modules/gallery/gallery-search-page/gallery-search-page.module';

@NgModule({
    imports: [
        RouterModule.forRoot([
            /* define app module routes here, e.g., to lazily load a module
               (do not place feature module routes here, use an own -routing.module.ts in the feature instead)
             */
            { path: '', component: GalleryComponent, pathMatch: 'full' },
            { path: 'movie-page/:id', loadChildren: './modules/movie-page/movie-page.module#MoviePageModule' },
            { path: 'find-movies/:searchKeyword', loadChildren: './modules/gallery/gallery-search-page/gallery-search-page.module#GallerySearchPageModule'},
            { path: '**', redirectTo: ''}
        ])
    ],
    exports: [RouterModule]
})

export class AppRouteModule {
}


