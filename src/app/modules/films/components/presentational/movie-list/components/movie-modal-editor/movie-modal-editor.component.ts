import {Component, Output, EventEmitter} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-movie-editor',
  templateUrl: './movie-modal-editor.component.html',
  styleUrls: ['./movie-modal-editor.component.scss']
})
export class MovieModalEditorComponent {

  form: FormGroup;

  @Output() closeAddMovieModal = new EventEmitter<void>();

  constructor() {
    this.form = new FormGroup({
      title: new FormControl('', Validators.required),
      poster: new FormControl('', Validators.required),
      genre: new FormControl('', Validators.required),
      actors: new FormControl('',),
      company: new FormControl(''),
      year: new FormControl(''),
      duration: new FormControl(''),
      imdbRating: new FormControl(''),
    });
  }

  close() {
    this.closeAddMovieModal.emit();
  }

}
