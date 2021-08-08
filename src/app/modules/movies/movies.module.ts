import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {MoviesComponent} from './components/container/movies/movies.component';
import {MoviesRoutingModule} from './movies-routing.module';
import {NgxsModule} from '@ngxs/store';
import {MovieState} from './states/movie/movie.state';
import {MovieListComponent} from './components/presentational/movie-list/movie-list.component';
import {MovieFormComponent} from './components/presentational/movie-form/movie-form.component';
import {GenreChipsComponent} from './components/presentational/genre-chips/genre-chips.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AddNewMovieComponent} from './components/container/add-new-movie/add-new-movie.component';
import {DetailMovieComponent} from './components/container/detail-movie/detail-movie.component';
import {UtilsModule} from "../utils/utils.module";
import {DetailViewMovieComponent} from './components/presentational/detail-view-movie/detail-view-movie.component';
import {EditMovieComponent} from './components/container/edit-movie/edit-movie.component';
import {TranslateModule} from "@ngx-translate/core";
import {LaddaModule} from "angular2-ladda";


@NgModule({
  declarations: [MoviesComponent, MovieListComponent, MovieFormComponent, GenreChipsComponent, AddNewMovieComponent, DetailMovieComponent, DetailViewMovieComponent, EditMovieComponent],
  imports: [
    MoviesRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    UtilsModule,
    NgxsModule.forFeature([MovieState]),
    TranslateModule,
    LaddaModule
  ]
})
export class MoviesModule {
}
