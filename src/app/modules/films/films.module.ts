import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {FilmsComponent} from "./components/container/films/films.component";
import {FilmsRoutingModule} from "./films-routing.module";

@NgModule({
  declarations: [FilmsComponent],
  imports: [
    FilmsRoutingModule,
    CommonModule,
    RouterModule
  ]
})
export class FilmsModule { }
