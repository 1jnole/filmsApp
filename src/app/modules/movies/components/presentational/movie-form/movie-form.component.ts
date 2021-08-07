import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {MovieInterface} from "../../../../../model/interfaces/movie/movie.interface";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MovieEntity} from "../../../../../model/entities/movie/movie.entity";
import {SwalService} from "../../../../../services/swal.service";
import {COMPANIES} from "../../../../../model/constants/companies";
import {StudioInterface} from "../../../../../model/interfaces/movie/studio.interface";

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.scss']
})
export class MovieFormComponent implements OnChanges {

  @Input() isLoading!: boolean;
  @Input() movie!: MovieInterface;
  @Input() isUpdateMode!: boolean;

  @Output() setNewMovie = new EventEmitter<MovieEntity>();
  @Output() updateCurrentMovie = new EventEmitter<MovieEntity>();

  form: FormGroup;
  companies: StudioInterface[];
  regex =  /(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/g

  constructor(private swalService: SwalService) {
    this.form = new FormGroup({
      title: new FormControl('', Validators.required),
      poster: new FormControl('', [Validators.required, Validators.pattern(this.regex)]),
      genre: new FormControl([], Validators.required),
      actors: new FormControl('',),
      company: new FormControl(''),
      year: new FormControl(''),
      duration: new FormControl(''),
      imdbRating: new FormControl(''),
    });
    this.companies = COMPANIES;
  }

  createMovie() {
    this.setNewMovie.emit(new MovieEntity({...this.form.getRawValue()}))
  }

  updateMovie() {
    this.updateCurrentMovie.emit(new MovieEntity(
      {id: this.movie.id, ...this.form.getRawValue()}
    ))
  }

  setDataToForm(movie: MovieEntity) {
    this.form.patchValue({
      ...movie
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.movie?.currentValue) {
      this.setDataToForm(changes.movie.currentValue);
    }
  }

}
