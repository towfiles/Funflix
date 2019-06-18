import { TestBed, inject, async } from '@angular/core/testing';

import { MoviesService } from './movies.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {HttpTestingController} from '@angular/common/http/testing';

describe('MoviesService', () => {


    let httpMock: HttpTestingController;
    let serviceMovie: MoviesService;

  beforeEach(async(() => {TestBed.configureTestingModule({
      providers : [MoviesService],
      imports: [
          HttpClientTestingModule,
      ],

  });


          serviceMovie = TestBed.get(MoviesService);
           httpMock = TestBed.get(HttpTestingController);

  }

  ));

    it('it should be created', () => {
        expect(serviceMovie).toBeTruthy();


    });



});

