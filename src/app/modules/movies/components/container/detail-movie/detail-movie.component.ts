import {Component, OnInit} from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {ActivatedRoute, Router} from "@angular/router";
import {GetMovieByIdAction} from "../../../actions/movies/get-movie-by-id.action";
import {MovieState} from "../../../states/movie/movie.state";
import {Observable} from "rxjs";
import {MovieInterface} from "../../../../../model/interfaces/movie/movie.interface";
import {hasActionsExecuting} from "@ngxs-labs/actions-executing";
import {DeleteMovieAction} from "../../../actions/movies/delete-movie.action";

@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.scss']
})
export class DetailMovieComponent implements OnInit {

  @Select(MovieState.getMovieToViewState) movieToView$!: Observable<MovieInterface>
  @Select(hasActionsExecuting([GetMovieByIdAction])) isLoadingMovie$!: Observable<boolean>

  constructor(private store: Store, private activatedRoute: ActivatedRoute, private router: Router) {
  }


  deleteMovie(id: number){
    this.store.dispatch(new DeleteMovieAction(id));
  }


  editMovie(movie: MovieInterface){
    this.router.navigate(['/movie/movie-detail/edit', movie?.id]);
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      const movieId = parseInt(params.get('id') as string, 10);
      this.store.dispatch(new GetMovieByIdAction(movieId));
    });
  }

}
