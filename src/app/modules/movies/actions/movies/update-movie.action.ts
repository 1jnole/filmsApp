import {MovieInterface} from "../../../../model/interfaces/movie/movie.interface";

export class UpdateMovieAction {
  public static readonly type = '[Movies] Update movie';

  constructor(public movie: MovieInterface) {}
}
