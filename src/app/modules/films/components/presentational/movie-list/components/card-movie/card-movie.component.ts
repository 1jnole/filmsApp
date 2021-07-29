import {Component, Input, OnInit} from '@angular/core';
import {MovieInterface} from "../../../../../../../model/interfaces/movie/movie.interface";

@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.scss']
})
export class CardMovieComponent implements OnInit {

  @Input() movie!: MovieInterface;

  constructor() { }

  trackByGenreFn(index: number):number {
    return index;
  }


  ngOnInit(): void {
  }

}
