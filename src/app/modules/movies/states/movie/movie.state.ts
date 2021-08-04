import {Action, Selector, State, StateContext} from "@ngxs/store";
import {MovieInterface} from "../../../../model/interfaces/movie/movie.interface";
import {Injectable} from "@angular/core";
import {GetMoviesAction} from "../../actions/movies/get-movies.action";
import {tap} from "rxjs/operators";
import {MovieService} from "../../services/movie.service";

import {MovieEntity} from "../../../../model/entities/movie/movie.entity";
import {AddNewMovieAction} from "../../actions/movies/add-new-movie.action";


export interface MovieStateModel {
  movies: MovieInterface[];
  newMovie: MovieInterface;
}

@State<MovieStateModel>({
  name: 'movies',
  defaults: {
    movies: [],
    newMovie: new MovieEntity({
      actors: [],
      duration: 0,
      genre: [],
      id: 0,
      imdbRating: 0,
      poster: "",
      title: "",
      year: 0
    })
  }
})

@Injectable()
export class MovieState {

  constructor(private movieService: MovieService) {
  }

  @Selector()
  public static getMoviesState(state: MovieStateModel) {
    return state.movies
  }

  @Selector()
  public static getNewMovieState(state: MovieStateModel) {
    return state.newMovie
  }

  @Action(GetMoviesAction)
  getMovies({patchState}: StateContext<MovieStateModel>) {
    return this.movieService.getMovies().pipe(tap((movies) => {
      patchState({
        movies
      });
    }));
  }

  @Action(AddNewMovieAction)
  addNewMovieAction({patchState}: StateContext<MovieStateModel>, {movie}: AddNewMovieAction) {
    return this.movieService.addNewMovie(movie).pipe(tap((movie) => {
      patchState({newMovie: movie});
    }))
  }

}



