import {Component, OnDestroy, OnInit} from '@angular/core';
import {GetMovieByIdAction} from "../../../actions/movies/get-movie-by-id.action";
import {Actions, ofActionSuccessful, Select, Store} from "@ngxs/store";
import {ActivatedRoute, Router} from "@angular/router";
import {MovieState} from "../../../states/movie/movie.state";
import {Observable, Subject} from "rxjs";
import {MovieInterface} from "../../../../../model/interfaces/movie/movie.interface";
import {UpdateMovieAction} from "../../../actions/movies/update-movie.action";
import {takeUntil} from "rxjs/operators";
import {SwalService} from "../../../../../services/swal.service";
import {hasActionsExecuting} from "@ngxs-labs/actions-executing";

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.scss']
})
export class EditMovieComponent implements OnInit, OnDestroy {

  @Select(MovieState.getMovieToViewState) movieToEdit$!: Observable<MovieInterface>
  @Select(hasActionsExecuting([GetMovieByIdAction])) isMovieToEditLoading$!: Observable<boolean>

  private ngUnsubscribe = new Subject();
  movieId: number = 0;

  constructor(private store: Store,
              private swalService: SwalService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private actions$: Actions) {
  }


  updateMovie(movie: MovieInterface) {
    this.store.dispatch(new UpdateMovieAction(movie));
    this.actions$
      .pipe(
        ofActionSuccessful(UpdateMovieAction),
        takeUntil(this.ngUnsubscribe))
      .subscribe(() => {
        this.swalService.openSwal({
          title: 'Complete',
          text: 'Data saved successfully',
          icon: 'success',
          showConfirmButton: true,
          showCancelButton: false,
          cancelButtonText: 'Close'
        }).then((res) => {
          if (res.isConfirmed) {
            this.router.navigate(['/movie/movie-detail', this.movieId]);
          }
        });
      });
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.movieId = parseInt(params.get('id') as string, 10);
      this.store.dispatch(new GetMovieByIdAction(this.movieId ));
    });
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}
