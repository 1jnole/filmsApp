import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MovieInterface} from '../../../../../model/interfaces/movie/movie.interface';


@Component({
  selector: 'app-films-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent {

  @Input() movies: MovieInterface[] = [];
  @Input() isLoadingMovies!: boolean;


  trackByFn(index: number, movie: MovieInterface): number {
    return movie.id;
  }

  trackByGenreFn(index: number): number {
    return index;
  }


}
