import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../../services/movies.service';
import {MovieListingModel} from '../../models/movie-listing-model';
import {AppConfigService} from '../../shared/config/app-config.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor(private _movieService: MoviesService, private _appConfigService: AppConfigService ) { }

  public movieList: MovieListingModel[];

    public imageDir = this._appConfigService.IMAGE_DIR;

  ngOnInit() {
this._movieService.getMovieList().subscribe(response => {
    this.movieList = response;
});

  }

}
