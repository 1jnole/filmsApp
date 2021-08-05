import {MovieInterface} from "../../../../model/interfaces/movie/movie.interface";

export class DeleteMovieAction {
  public static readonly type = '[Movies] Delete movie';

  constructor(public id: number) {}
}
