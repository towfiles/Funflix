import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {MovieListingModel} from '../models/movie-listing-model';
import {AppConfigService} from '../shared/config/app-config.service';
import {MovieDataModel} from '../models/movie-data-model';

const httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json", "Authorization": "c31z" })
};

@Injectable({
  providedIn: 'root'
})

export class MoviesService {

    constructor(public _http: HttpClient, private _appConfigService: AppConfigService) {
    }

    public getMovieList(/*movieListFilter: MovieListFilterModel*/): Observable<Array<MovieListingModel>> {
        const getMovieListRequest: Observable<Array<MovieListingModel>>
            = this._http.get<Array<MovieListingModel>>(this._appConfigService.MOVIE_DATA_DIR);
        return getMovieListRequest;
    }

    public getMovieById(movieId: number): Observable<MovieDataModel> {
        const getMovieRequest: Observable<MovieDataModel>
            = this._http.get<MovieDataModel>(this._appConfigService.MOVIE_DATA_DIR + '/' + movieId);
        return getMovieRequest;
    }

    public searchMovies(searchQuery: string): Observable<Array<MovieListingModel>>  {
        const searchMoviesResult: Observable<Array<MovieListingModel>>
            = this._http.get<Array<MovieListingModel>>(this._appConfigService.MOVIE_DATA_DIR + '?q=' + searchQuery);
        return searchMoviesResult;
    }



}
