import { NgModule } from '@angular/core';
import {GallerySearchPageComponent} from './gallery-search-page.component';
import {RouterModule} from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: GallerySearchPageComponent}
        ])
    ],
    declarations: [],
    exports: [RouterModule]
})
export class GallerySearchPageRouteModule { }
