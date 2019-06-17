import { MoviePageModule } from './movie-page.module';

describe('MoviePageModule', () => {
  let moviePageModule: MoviePageModule;

  beforeEach(() => {
    moviePageModule = new MoviePageModule();
  });

  it('should create an instance', () => {
    expect(moviePageModule).toBeTruthy();
  });
});
