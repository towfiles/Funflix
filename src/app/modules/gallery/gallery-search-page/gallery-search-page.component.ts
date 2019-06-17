import {Component, OnInit, OnDestroy} from '@angular/core';
import {MoviesService} from '../../../services/movies.service';
import {MovieListingModel} from '../../../models/movie-listing-model';
import {AppConfigService} from '../../../shared/config/app-config.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-gallery-search-page',
  templateUrl: './gallery-search-page.component.html',
  styleUrls: ['./gallery-search-page.component.scss']
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

    public SearchMovies (searchKeyword){
        this._movieService.searchMovies(searchKeyword).subscribe(response =>
        {
            this.movieList = response;

        });
    }

    public FilterMovies(filterList){
        
        const processedFilterList = filterList.replace(',', '&q=');
        this._movieService.searchMovies(processedFilterList).subscribe(response =>
        {
            this.movieList = response;

        });
    }




  ngOnInit() {

      //get  movies when route changes to page search
      this._activatedRoute.params.subscribe((params) => {
          if(params.searchKeyword !== undefined && params.searchKeyword !== '') {
            const url: any = this._activatedRoute.parent.url;
              if(url.value[0].path === 'filter-movies'){

              this.FilterMovies(params.searchKeyword);
              }
              else {
                this.SearchMovies(params.searchKeyword);
              }


          }

      });



  }

}
