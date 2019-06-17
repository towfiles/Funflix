import {Component, OnInit, OnDestroy} from '@angular/core';
import {MoviesService} from '../../services/movies.service';
import {MovieListingModel} from '../../models/movie-listing-model';
import {AppConfigService} from '../../shared/config/app-config.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit, OnDestroy {

  constructor(private _movieService: MoviesService,
              private _appConfigService: AppConfigService,
              private _router: Router) { }

    public movieList: MovieListingModel[];

    public imageDir = this._appConfigService.IMAGE_DIR;

    public currentMovieElement: HTMLElement;


    // public showOverlay(event: any, status: boolean){
    //   this.currentMovieElement = event.currentTarget;
    //   if(this.currentMovieElement  !== undefined){
    //
    //       const overLayId = this.currentMovieElement.id + '-overlay';
    //       const overlayElement = document.getElementById(overLayId) as HTMLElement;
    //
    //       overlayElement.style.visibility = (status) ? 'visible' : 'hidden';
    //
    //   }
    //
    // }


    public ViewMoviePage(movie: MovieListingModel) {
        this._router.navigate(['movie-page', movie.id]);

    }


  ngOnInit() {

    //get  movies when route changes to page search
      this._movieService.getMovieList().subscribe(response => {
          this.movieList = response;
      });

  }

    ngOnDestroy() {
    }

}
