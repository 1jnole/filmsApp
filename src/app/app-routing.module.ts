import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {path: '', redirectTo: 'movie', pathMatch: 'full'},
  {
    path: 'movie',
    loadChildren: () => import('./modules/films/films.module').then(m => m.FilmsModule)
  },
  {path: '**', redirectTo: 'movie', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
