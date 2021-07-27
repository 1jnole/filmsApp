import {MovieInterface} from "../interfaces/movie.interface";
import {GenreEnum} from "../enums/movies/genre.enum";
import {MovieDto} from "../dto/movie.dto";

export class MovieEntity implements MovieInterface {
  id: number;
  title: string;
  poster: string;
  genre: GenreEnum[];
  year: number;
  duration: number;
  imdbRating: number;
  actors: number[];

  constructor({id, duration, genre, imdbRating, poster, title, year, actors}: MovieInterface) {
    this.id = id;
    this.duration = duration;
    this.genre = genre;
    this.imdbRating = imdbRating;
    this.poster = poster;
    this.title = title;
    this.year = year;
    this.actors = actors;
  }

  static fromMovieDTO({id, duration, genre, imdbRating, poster, title, year, actors}: MovieDto) {
    return new MovieEntity({
      id,
      duration,
      genre,
      imdbRating,
      poster,
      title,
      year,
      actors
    });
  }
}
