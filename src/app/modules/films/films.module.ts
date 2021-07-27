import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {FilmsComponent} from "./components/container/films/films.component";
import {FilmsRoutingModule} from "./films-routing.module";
import {NgxsModule} from "@ngxs/store";
import {MovieState} from "./states/movie/movie.state";

@NgModule({
  declarations: [FilmsComponent],
  imports: [
    FilmsRoutingModule,
    CommonModule,
    RouterModule,
    NgxsModule.forFeature([MovieState]),
  ]
})
export class FilmsModule { }
