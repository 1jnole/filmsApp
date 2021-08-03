import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {MovieInterface} from "../../../../../model/interfaces/movie/movie.interface";
import {Select, Store} from "@ngxs/store";
import {MovieState} from "../../../states/movie/movie.state";
import {GetMoviesAction} from "../../../actions/movies/get-movies.action";
import {OpenMovieModalAction} from "../../../actions/modal/open-movie-modal.action";
import {CloseMovieModalAction} from "../../../actions/modal/close-movie-modal.action";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {


  constructor(private store: Store) {}

  @Select(MovieState.getMoviesState) movies$!: Observable<MovieInterface[]>
  @Select(MovieState.getModalState) hasModalOpen!: Observable<MovieInterface[]>

  openModal(){
    this.store.dispatch(new OpenMovieModalAction())
  }

  closeModal(){
    this.store.dispatch(new CloseMovieModalAction())
  }

  ngOnInit(): void {
    this.store.dispatch(new GetMoviesAction());
  }

}
