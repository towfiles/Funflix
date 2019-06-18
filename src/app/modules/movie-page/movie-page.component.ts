import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MoviesService} from '../../services/movies.service';
import {MovieDataModel} from '../../models/movie-data-model';
import {AppConfigService} from '../../shared/config/app-config.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.scss']
})
export class MoviePageComponent implements OnInit {

  constructor(private _route: ActivatedRoute,
              private _movieService: MoviesService,
              private _appConfigService: AppConfigService,
              private _location: Location) {

  }

  public movieData: MovieDataModel;

  public imageDir = this._appConfigService.IMAGE_DIR;


  public GoBackToPreviousPage(){
      this._location.back();

  }


  GetMovieDetails(movieId: number){
    this._movieService.getMovieById(movieId).subscribe((response) => {
        this.movieData = response;

    });
  }

  ngOnInit() {
      this._route.params.subscribe((params) => {
        this.GetMovieDetails(params.id);

      });
  }

}
