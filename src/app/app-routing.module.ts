import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'movie', pathMatch: 'full'},
  {path: 'movie', loadChildren: () => import('./modules/movies/movies.module').then(m => m.MoviesModule)},
  {path: '**', redirectTo: 'movie', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
