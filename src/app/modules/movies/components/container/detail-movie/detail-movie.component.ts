import { Component, OnInit } from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {MovieState} from "../../../states/movie/movie.state";
import {Observable} from "rxjs";
import {MovieInterface} from "../../../../../model/interfaces/movie/movie.interface";
import {Router} from "@angular/router";

@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.scss']
})
export class DetailMovieComponent implements OnInit {

  @Select(MovieState.getNewMovieState) newMovie$!: Observable<MovieInterface>

  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {
    this.newMovie$.subscribe((res) => {
      console.log(res);
    })
  }

}
