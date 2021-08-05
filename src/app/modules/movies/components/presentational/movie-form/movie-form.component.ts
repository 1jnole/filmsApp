import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {MovieInterface} from "../../../../../model/interfaces/movie/movie.interface";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MovieEntity} from "../../../../../model/entities/movie/movie.entity";
import {SwalService} from "../../../../../services/swal.service";
import {CompanyEnum} from "../../../../../model/enums/movie/company.enum";
import {COMPANIES} from "../../../../../model/constants/companies";
import {StudioInterface} from "../../../../../model/interfaces/movie/studio.interface";

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.scss']
})
export class MovieFormComponent implements OnInit {

  @Input() isLoading!: boolean;
  @Input() movie!: MovieInterface;
  @Input() isUpdateMode!: boolean;

  @Output() setNewMovie = new EventEmitter<MovieEntity>();
  @Output() updateCurrentMovie = new EventEmitter<MovieEntity>();

  form: FormGroup;
  companies: StudioInterface[];
  regex = /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/;

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

  submitForm() {
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

  ngOnInit(): void {
    this.setDataToForm(this.movie);
  }


}
