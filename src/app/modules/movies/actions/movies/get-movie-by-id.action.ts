export class GetMovieByIdAction {
  public static readonly type = '[Movies] Get Movie By Id';

  constructor(public id: number) {}
}
