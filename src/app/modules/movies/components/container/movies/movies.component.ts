import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {MovieInterface} from "../../../../../model/interfaces/movie/movie.interface";
import {Select, Store} from "@ngxs/store";
import {MovieState} from "../../../states/movie/movie.state";
import {GetMoviesAction} from "../../../actions/movies/get-movies.action";
import {hasActionsExecuting} from "@ngxs-labs/actions-executing";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  constructor(private store: Store) {}

  @Select(MovieState.getMoviesState) movies$!: Observable<MovieInterface[]>
  @Select(hasActionsExecuting([GetMoviesAction])) isLoadingMovies$!: Observable<boolean>

  ngOnInit(): void {
    this.store.dispatch(new GetMoviesAction());
  }

}
