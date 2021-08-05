import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MoviesComponent} from './components/container/movies/movies.component';
import {AddNewMovieComponent} from "./components/container/add-new-movie/add-new-movie.component";
import {DetailMovieComponent} from "./components/container/detail-movie/detail-movie.component";
import {EditMovieComponent} from "./components/container/edit-movie/edit-movie.component";


const routes: Routes = [
  {path: '', component: MoviesComponent},
  {path: 'add-new-movie', component: AddNewMovieComponent},
  {path: 'movie-detail/:id', component: DetailMovieComponent},
  {path: 'movie-detail/edit/:id', component: EditMovieComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule {
}
