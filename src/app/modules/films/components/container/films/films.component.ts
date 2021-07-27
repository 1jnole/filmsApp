import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {MovieInterface} from "../../../../../model/interfaces/movie.interface";
import {Select, Store} from "@ngxs/store";
import {MovieState} from "../../../states/movie/movie.state";
import {GetMoviesAction} from "../../../actions/movies/get-movies.action";

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {

  constructor(private store: Store) { }

  @Select(MovieState.getMoviesState) movies$!: Observable<MovieInterface[]>

  ngOnInit(): void {
    this.store.dispatch(new GetMoviesAction());
  }

}
