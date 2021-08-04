import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {MovieInterface} from "../../../../../model/interfaces/movie/movie.interface";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MovieEntity} from "../../../../../model/entities/movie/movie.entity";

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.scss']
})
export class MovieFormComponent implements OnInit, OnChanges {

  @Input() isAddingMovie!: boolean;
  @Output() setNewMovie = new EventEmitter<MovieEntity>();

  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      title: new FormControl('pepe', Validators.required),
      poster: new FormControl('3', Validators.required),
      genre: new FormControl([1, 2, 3, 4], Validators.required),
      actors: new FormControl('34',),
      company: new FormControl('45'),
      year: new FormControl('56'),
      duration: new FormControl('78'),
      imdbRating: new FormControl('920'),
    });
  }

  close() {
    //   this.closeAddMovieModal.emit();
  }

  submitForm() {
    this.setNewMovie.emit(new MovieEntity({...this.form.getRawValue()}))
  }

  setDataToForm(movie: MovieEntity) {
    this.form.patchValue({
      ...movie
    })
  }

  ngOnInit(): void {
    // this.setDataToForm(this.movieToEdit);
  }

  ngOnChanges(changes: SimpleChanges): void {
    /* if (changes.movieToEdit?.currentValue) {
       this.setDataToForm(changes.movieToEdit.currentValue);
     } */
  }

}
