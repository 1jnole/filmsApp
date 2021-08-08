import {Component, OnInit} from '@angular/core';
import {Actions, ofActionSuccessful, Select, Store} from "@ngxs/store";
import {ActivatedRoute, Router} from "@angular/router";
import {GetMovieByIdAction} from "../../../actions/movies/get-movie-by-id.action";
import {MovieState} from "../../../states/movie/movie.state";
import {Observable, Subject} from "rxjs";
import {MovieInterface} from "../../../../../model/interfaces/movie/movie.interface";
import {hasActionsExecuting} from "@ngxs-labs/actions-executing";
import {DeleteMovieAction} from "../../../actions/movies/delete-movie.action";
import {takeUntil} from "rxjs/operators";
import {SwalService} from "../../../../../services/swal.service";

@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.scss',
    '../../../../../../assets/vendor/libs/angular2-ladda/angular2-ladda.scss']
})
export class DetailMovieComponent implements OnInit {

  @Select(MovieState.getMovieToViewState) movieToView$!: Observable<MovieInterface>
  @Select(hasActionsExecuting([GetMovieByIdAction])) isLoadingMovie$!: Observable<boolean>
  @Select(hasActionsExecuting([DeleteMovieAction])) isDeletingMovie$!: Observable<boolean>

  private ngUnsubscribe = new Subject();
  movieId: number = 0;

  constructor(private store: Store,
              private swalService: SwalService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private actions$: Actions) {}

  deleteMovie(id: number){
    this.store.dispatch(new DeleteMovieAction(id));
    this.actions$
      .pipe(
        ofActionSuccessful(DeleteMovieAction),
        takeUntil(this.ngUnsubscribe))
      .subscribe(() => {
        this.swalService.openSwal({
          title: 'Complete',
          text: 'Action completed successfully',
          icon: 'success',
          showConfirmButton: true,
          showCancelButton: false,
          cancelButtonText: 'Close'
        }).then((res) => {
          if (res.isConfirmed) {
            this.router.navigate(['/movie/']);
          }
        });
      });
  }

  editMovie(movie: MovieInterface){
    this.router.navigate(['/movie/movie-detail/edit', movie?.id]);
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.movieId = parseInt(params.get('id') as string, 10);
      this.store.dispatch(new GetMovieByIdAction(this.movieId));
    });
  }

}
