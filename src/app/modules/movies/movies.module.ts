import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {MoviesComponent} from './components/container/movies/movies.component';
import {MoviesRoutingModule} from './movies-routing.module';
import {NgxsModule} from '@ngxs/store';
import {MovieState} from './states/movie/movie.state';
import {MovieListComponent} from './components/presentational/movie-list/movie-list.component';
import {MovieModalEditorComponent} from './components/presentational/movie-list/components/movie-modal-editor/movie-modal-editor.component';
import {GenreChipsComponent} from './components/presentational/movie-list/components/genre-chips/genre-chips.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [MoviesComponent, MovieListComponent, MovieModalEditorComponent, GenreChipsComponent],
  imports: [
    MoviesRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgxsModule.forFeature([MovieState]),
  ]
})
export class MoviesModule { }
