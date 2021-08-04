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

  context = 'http://localhost:3000';

  getMovies(): Observable<MovieInterface[]> {
    return this.http.get<MovieDto[]>(`${this.context}/movies`)
      .pipe(map((movie) => {
        return movie.map((item) => MovieEntity.fromMovieDTO(item));
      })
    )
  }

  getMovieById(id: number): Observable<MovieInterface> {
    return this.http.get<MovieDto>(`${this.context}/movies/${id}`).pipe(map((movie) => {
      return MovieEntity.fromMovieDTO(movie)
    }));
  }

  addNewMovie(movie: MovieInterface): Observable<MovieInterface>{
    return this.http.post<MovieInterface>(`${this.context}/movies`, MovieEntity.toMovieDTO(movie)).pipe((map((movie) => {
      return MovieEntity.fromMovieDTO(movie)
    })))

  }
}
