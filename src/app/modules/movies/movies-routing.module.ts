import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MoviesComponent} from './components/container/movies/movies.component';
import {AddNewMovieComponent} from "./components/container/add-new-movie/add-new-movie.component";
import {DetailMovieComponent} from "./components/container/detail-movie/detail-movie.component";


const routes: Routes = [
  {path: '', component: MoviesComponent},
  {path: 'add-new-movie', component: AddNewMovieComponent},
  {path: 'detail-movie', component: DetailMovieComponent}
  // { path: 'movie/:id', component: ProductDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule {
}
