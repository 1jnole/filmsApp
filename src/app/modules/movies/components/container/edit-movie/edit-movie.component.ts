import {Component, OnInit} from '@angular/core';
import {GetMovieByIdAction} from "../../../actions/movies/get-movie-by-id.action";
import {Select, Store} from "@ngxs/store";
import {ActivatedRoute, Router} from "@angular/router";
import {MovieState} from "../../../states/movie/movie.state";
import {Observable} from "rxjs";
import {MovieInterface} from "../../../../../model/interfaces/movie/movie.interface";
import {UpdateMovieAction} from "../../../actions/movies/update-movie.action";

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.scss']
})
export class EditMovieComponent implements OnInit {

  @Select(MovieState.getMovieToViewState) movieToEdit$!: Observable<MovieInterface>

  constructor(private store: Store, private activatedRoute: ActivatedRoute, private router: Router) {
  }


  updateMovie(movie: MovieInterface) {
    console.log(movie);
    this.store.dispatch(new UpdateMovieAction(movie));
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      const movieId = parseInt(params.get('id') as string, 10);
      this.store.dispatch(new GetMovieByIdAction(movieId));
    });
  }

}
