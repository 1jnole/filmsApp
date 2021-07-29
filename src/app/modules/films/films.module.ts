import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {FilmsComponent} from "./components/container/films/films.component";
import {FilmsRoutingModule} from "./films-routing.module";
import {NgxsModule} from "@ngxs/store";
import {MovieState} from "./states/movie/movie.state";
import {MovieListComponent} from "./components/presentational/movie-list/movie-list.component";
import { MovieEditorComponent } from './components/presentational/movie-editor/movie-editor.component';


@NgModule({
  declarations: [FilmsComponent, MovieListComponent, MovieEditorComponent],
  imports: [
    FilmsRoutingModule,
    CommonModule,
    RouterModule,
    NgxsModule.forFeature([MovieState]),
  ]
})
export class FilmsModule { }
