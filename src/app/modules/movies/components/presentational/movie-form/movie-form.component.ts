import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {MovieInterface} from "../../../../../model/interfaces/movie/movie.interface";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MovieEntity} from "../../../../../model/entities/movie/movie.entity";
import {SwalService} from "../../../../../services/swal.service";

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.scss']
})
export class MovieFormComponent implements OnInit, OnChanges {

  @Input() isLoading!: boolean;
  @Input() movie!: MovieInterface;
  @Input() isUpdateMode!: boolean;

  @Output() setNewMovie = new EventEmitter<MovieEntity>();
  @Output() updateCurrentMovie = new EventEmitter<MovieEntity>();

  form: FormGroup;

  constructor(private swalService: SwalService) {
    this.form = new FormGroup({
      title: new FormControl('', Validators.required),
      poster: new FormControl('', Validators.required),
      genre: new FormControl([], Validators.required),
      actors: new FormControl('',),
      company: new FormControl(''),
      year: new FormControl(''),
      duration: new FormControl(''),
      imdbRating: new FormControl(''),
    });
  }

  submitForm() {
    this.setNewMovie.emit(new MovieEntity({...this.form.getRawValue()}))
  }

  updateMovie() {
    this.updateCurrentMovie.emit(new MovieEntity({id: this.movie.id, ...this.form.getRawValue()}))
  }

  setDataToForm(movie: MovieEntity) {
    this.form.patchValue({
      ...movie
    })
  }

  ngOnInit(): void {
    console.log(this.movie);
    this.setDataToForm(this.movie);
  }


  ngOnChanges(changes: SimpleChanges): void {
    /* if (changes.movieToEdit?.currentValue) {
       this.setDataToForm(changes.movieToEdit.currentValue);
     } */
  }

}
