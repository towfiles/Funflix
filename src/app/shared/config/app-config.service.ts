import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {

  constructor() { }

    public IMAGE_DIR  = '/src/assets/images/movie-covers';
    public MOVIE_DATA_DIR = 'http://localhost:3000/data';



}
