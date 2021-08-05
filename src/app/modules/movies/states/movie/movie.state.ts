import {Action, Selector, State, StateContext} from "@ngxs/store";
import {MovieInterface} from "../../../../model/interfaces/movie/movie.interface";
import {Injectable} from "@angular/core";
import {GetMoviesAction} from "../../actions/movies/get-movies.action";
import {tap} from "rxjs/operators";
import {MovieService} from "../../services/movie.service";

import {MovieEntity} from "../../../../model/entities/movie/movie.entity";
import {AddNewMovieAction} from "../../actions/movies/add-new-movie.action";
import {GetMovieByIdAction} from "../../actions/movies/get-movie-by-id.action";
import {DeleteMovieAction} from "../../actions/movies/delete-movie.action";
import {UpdateMovieAction} from "../../actions/movies/update-movie.action";


export interface MovieStateModel {
  movies: MovieInterface[];
  newMovie: MovieInterface;
  movieToView: MovieInterface;
}

@State<MovieStateModel>({
  name: 'movies',
  defaults: {
    movies: [],
    newMovie: new MovieEntity({
      id: 0,
      actors: [],
      duration: 0,
      genre: [],
      imdbRating: 0,
      poster: "",
      title: "",
      year: 0
    }),
    movieToView: new MovieEntity({
      id: 0,
      actors: [],
      duration: 0,
      genre: [],
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

  @Selector()
  public static getMovieToViewState(state: MovieStateModel) {
    return state.movieToView
  }

  @Action(GetMoviesAction)
  getMovies({patchState}: StateContext<MovieStateModel>) {
    return this.movieService.getMovies().pipe(tap((movies) => {
      patchState({
        movies
      });
    }));
  }

  @Action(GetMovieByIdAction)
  getMovieById({patchState}: StateContext<MovieStateModel>, {id}: GetMovieByIdAction) {
    return this.movieService.getMovieById(id).pipe(tap((movieToView) => {
      patchState({
        movieToView: movieToView
      });
    }));
  }

  @Action(DeleteMovieAction)
  deleteMovie({patchState, dispatch}: StateContext<MovieStateModel>, {id}: DeleteMovieAction) {
    return this.movieService.deleteMovie(id).pipe(tap((movie) => {
      dispatch(new GetMoviesAction());
    }));
  }

  @Action(UpdateMovieAction)
  updateMovie({patchState, dispatch}: StateContext<MovieStateModel>, {movie}: UpdateMovieAction) {
    return this.movieService.updateMovie(movie).pipe(tap(() => {
      dispatch(new GetMoviesAction());
    }));
  }

  @Action(AddNewMovieAction)
  addNewMovieAction({patchState}: StateContext<MovieStateModel>, {movie}: AddNewMovieAction) {
    return this.movieService.addNewMovie(movie).pipe(tap((movie) => {
      patchState({newMovie: movie});
    }))
  }

}



