import {MovieInterface} from "../../../../model/interfaces/movie/movie.interface";

export class AddNewMovieAction {
  public static readonly type = '[Movies] Add new movie';

  constructor(public movie: MovieInterface) {}
}
