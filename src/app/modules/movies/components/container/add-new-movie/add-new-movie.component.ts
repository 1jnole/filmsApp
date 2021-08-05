import {Component, OnInit} from '@angular/core';
import {MovieEntity} from "../../../../../model/entities/movie/movie.entity";
import {Select, Store} from "@ngxs/store";
import {AddNewMovieAction} from "../../../actions/movies/add-new-movie.action";
import {MovieState, MovieStateModel} from "../../../states/movie/movie.state";
import {Observable, Subscription} from "rxjs";
import {MovieInterface} from "../../../../../model/interfaces/movie/movie.interface";
import {ActivatedRoute, Router} from "@angular/router";
import {hasActionsExecuting} from "@ngxs-labs/actions-executing";
import {GetMoviesAction} from "../../../actions/movies/get-movies.action";
import {SwalService} from "../../../../../services/swal.service";

@Component({
  selector: 'app-add-new-movie',
  templateUrl: './add-new-movie.component.html',
  styleUrls: ['./add-new-movie.component.scss']
})
export class AddNewMovieComponent implements OnInit {

  @Select(MovieState.getNewMovieState) newMovie$!: Observable<MovieInterface>
  @Select(hasActionsExecuting([AddNewMovieAction])) isAddingMovie$!: Observable<boolean>

  isActionExecuting = false;
  isSavingSubs!: Subscription;

  constructor(private store: Store,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private swalService: SwalService) {
  }

  addNewMovie(movie: MovieEntity) {
    this.isActionExecuting = true;
    this.store.dispatch(new AddNewMovieAction(movie));
  }

  ngOnInit(): void {
    //TODO: Remove workaround
    this.isSavingSubs?.unsubscribe();
    this.isSavingSubs = this.isAddingMovie$.subscribe((result) => {
      if (this.isActionExecuting && !result) {
        this.swalService.openSwal({
          title: 'Complete',
          text: 'Data saved succesfully',
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
        this.isActionExecuting = result;
      }
    })
  }
}
