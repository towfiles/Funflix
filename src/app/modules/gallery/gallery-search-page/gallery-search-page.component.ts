import {Component, OnInit, OnDestroy} from '@angular/core';
import {MoviesService} from '../../../services/movies.service';
import {MovieListingModel} from '../../../models/movie-listing-model';
import {AppConfigService} from '../../../shared/config/app-config.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-gallery-search-page',
  templateUrl: './gallery-search-page.component.html',
  styleUrls: ['./gallery-search-page.component.css']
})
export class GallerySearchPageComponent implements OnInit {

  constructor(private _movieService: MoviesService,
              private _appConfigService: AppConfigService,
              private _activatedRoute: ActivatedRoute,
              private _router: Router) { }

    public movieList: MovieListingModel[];

    public imageDir = this._appConfigService.IMAGE_DIR;


    public ViewMoviePage(movie: MovieListingModel) {
        this._router.navigate(['movie-page', movie.id]);

    }

    public SearchMovies (event){
        console.log('testing' + event);
        this._movieService.searchMovies(event).subscribe(response =>
        {
            this.movieList = response;
            console.log(response);
        });
    }




  ngOnInit() {

      //get  movies when route changes to page search
      this._activatedRoute.params.subscribe((params) => {
          if(params.searchKeyword !== undefined && params.searchKeyword !== ''){
              this.SearchMovies(params.searchKeyword);

          }

      });



  }

}
