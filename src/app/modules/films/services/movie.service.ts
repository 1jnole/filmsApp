import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {MovieInterface} from "../../../model/interfaces/movie.interface";
import {MovieDto} from "../../../model/dto/movie.dto";
import {map} from "rxjs/operators";
import {MovieEntity} from "../../../model/entities/movie.entity";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getMovies(): Observable<MovieInterface[]> {
    return this.http.get<MovieDto[]>('http://localhost:3000/movies')
      .pipe(map((movie) => {
        return movie.map((item) => MovieEntity.fromMovieDTO(item));
      })
    )
  }
}
