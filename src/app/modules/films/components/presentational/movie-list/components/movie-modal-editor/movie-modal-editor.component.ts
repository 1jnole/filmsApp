import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-movie-editor',
  templateUrl: './movie-modal-editor.component.html',
  styleUrls: ['./movie-modal-editor.component.scss']
})
export class MovieModalEditorComponent {

  @Output() closeAddMovieModal = new EventEmitter<void>();



  close(){
    this.closeAddMovieModal.emit();
  }

}
