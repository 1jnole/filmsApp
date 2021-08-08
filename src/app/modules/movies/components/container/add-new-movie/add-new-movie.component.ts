import {Component, OnDestroy, OnInit} from '@angular/core';
import {MovieEntity} from "../../../../../model/entities/movie/movie.entity";
import {Actions, ofActionSuccessful, Select, Store} from "@ngxs/store";
import {AddNewMovieAction} from "../../../actions/movies/add-new-movie.action";
import {MovieState} from "../../../states/movie/movie.state";
import {Observable, Subject} from "rxjs";
import {MovieInterface} from "../../../../../model/interfaces/movie/movie.interface";
import {ActivatedRoute, Router} from "@angular/router";
import {hasActionsExecuting} from "@ngxs-labs/actions-executing";
import {SwalService} from "../../../../../services/swal.service";
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'app-add-new-movie',
  templateUrl: './add-new-movie.component.html',
  styleUrls: ['./add-new-movie.component.scss']
})
export class AddNewMovieComponent implements OnInit, OnDestroy {

  @Select(MovieState.getNewMovieState) newMovie$!: Observable<MovieInterface>
  @Select(hasActionsExecuting([AddNewMovieAction])) isAddingMovie$!: Observable<boolean>

  private ngUnsubscribe = new Subject();

  constructor(private store: Store,
              private actions$: Actions,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private swalService: SwalService) {
  }

  addNewMovie(movie: MovieEntity) {
    this.store.dispatch(new AddNewMovieAction(movie));
  }


  ngOnInit(): void {
    this.actions$
      .pipe(
        ofActionSuccessful(AddNewMovieAction),
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
            this.newMovie$.subscribe((movie) => {
              this.router.navigate(['/movie/movie-detail', movie?.id]);
            })
          }
        });
      });
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
