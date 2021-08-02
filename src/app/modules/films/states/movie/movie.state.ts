import {Action, Selector, State, StateContext} from "@ngxs/store";
import {MovieInterface} from "../../../../model/interfaces/movie/movie.interface";
import {Injectable} from "@angular/core";
import {GetMoviesAction} from "../../actions/movies/get-movies.action";

import {tap} from "rxjs/operators";
import {OpenMovieModalAction} from "../../actions/modal/open-movie-modal.action";
import {CloseMovieModalAction} from "../../actions/modal/close-movie-modal.action";
import {MovieModalService} from "../../services/movie-modal.service";
import {MovieService} from "../../services/movie.service";


export interface MovieStateModel {
  movies: MovieInterface[];
  hasModalOpen: boolean;
}

@State<MovieStateModel>({
  name: 'movies',
  defaults: {
    movies: [],
    hasModalOpen: false,
  }
})
@Injectable()
export class MovieState{

  constructor( private movieService: MovieService, private movieModalService: MovieModalService) {}

  @Selector()
  public static getMoviesState(state: MovieStateModel){
    return state.movies
  }

  @Selector()
  public static getModalState(state: MovieStateModel){
    return state.hasModalOpen
  }

  @Action(GetMoviesAction)
  getMovies({patchState}: StateContext<MovieStateModel>){
    return this.movieService.getMovies().pipe(tap((movies) => {
      patchState({
        movies
      });
    }));
  }

  @Action(OpenMovieModalAction)
  openMovieModal({patchState}: StateContext<MovieStateModel>) {
    return this.movieModalService.openMovieModal().pipe(tap((res ) =>  {
      patchState({
        hasModalOpen: res
      });
    }));
  }

  @Action(CloseMovieModalAction)
  closeMovieModal({patchState}: StateContext<MovieStateModel>) {
    return this.movieModalService.closeMovieModal().pipe(tap((res ) =>  {
      patchState({
        hasModalOpen: res
      });
    }));
  }
}
