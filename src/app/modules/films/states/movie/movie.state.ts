import {Action, Selector, State, StateContext} from "@ngxs/store";
import {MovieInterface} from "../../../../model/interfaces/movie/movie.interface";
import {Injectable} from "@angular/core";
import {GetMoviesAction} from "../../actions/movies/get-movies.action";
import {MovieService} from "../../services/movie.service";
import {tap} from "rxjs/operators";

export interface MovieStateModel {
  movies: MovieInterface[];
}

@State<MovieStateModel>({
  name: 'movies',
  defaults: {
    movies: []
  }
})
@Injectable()
export class MovieState{

  constructor( private movieService: MovieService) {}

  @Selector()
  public static getMoviesState(state: MovieStateModel){
    return state.movies
  }

  @Action(GetMoviesAction)
  getMovies({patchState}: StateContext<MovieStateModel>){
    return this.movieService.getMovies().pipe(tap((movies) => {
      patchState({
        movies
      })
    }))
  }

}
