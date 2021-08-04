import {Component, OnInit} from '@angular/core';
import {MovieEntity} from "../../../../../model/entities/movie/movie.entity";
import {Select, Store} from "@ngxs/store";
import {AddNewMovieAction} from "../../../actions/movies/add-new-movie.action";
import {MovieState} from "../../../states/movie/movie.state";
import {Observable} from "rxjs";
import {MovieInterface} from "../../../../../model/interfaces/movie/movie.interface";
import {ActivatedRoute, Router} from "@angular/router";
import {hasActionsExecuting} from "@ngxs-labs/actions-executing";
import {GetMoviesAction} from "../../../actions/movies/get-movies.action";

@Component({
  selector: 'app-add-new-movie',
  templateUrl: './add-new-movie.component.html',
  styleUrls: ['./add-new-movie.component.scss']
})
export class AddNewMovieComponent implements OnInit {

  @Select(MovieState.getNewMovieState) newMovie$!: Observable<MovieInterface>
  @Select(hasActionsExecuting([AddNewMovieAction])) isAddingMovie$!: Observable<boolean>

  constructor(private store: Store, private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {

  }


  addNewMovie(movie: MovieEntity) {
    this.store.dispatch(new AddNewMovieAction(movie));

    /*
    () => {
      this.router.navigate(['..', 'detail-movie'], {relativeTo: this.activatedRoute})

     */
  }
}
