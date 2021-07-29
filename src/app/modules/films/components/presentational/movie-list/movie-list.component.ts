import {Component, Input, OnInit} from '@angular/core';
import {MovieInterface} from "../../../../../model/interfaces/movie/movie.interface";

@Component({
  selector: 'app-films-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  @Input() movies: MovieInterface[] = [];

  constructor() { }

  ngOnInit(): void {
    console.log(this.movies);
  }

  trackByFn(index: number, movie: MovieInterface):number {
      return movie.id;
  }

}
