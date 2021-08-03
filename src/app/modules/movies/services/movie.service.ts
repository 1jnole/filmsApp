import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {MovieInterface} from "../../../model/interfaces/movie/movie.interface";
import {MovieDto} from "../../../model/dto/movie/movie.dto";
import {map} from "rxjs/operators";
import {MovieEntity} from "../../../model/entities/movie/movie.entity";

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
