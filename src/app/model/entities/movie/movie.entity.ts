import {MovieInterface} from '../../interfaces/movie/movie.interface';
import {MovieDto} from '../../dto/movie/movie.dto';


export class MovieEntity implements MovieInterface {
  id: number;
  title: string;
  poster: string;
  genres: string[];
  year: number;
  duration: number;
  imdbRating: number;
  actors: number[];

  constructor({id, duration, genres, imdbRating, poster, title, year, actors}: MovieInterface) {
    this.id = id;
    this.duration = duration;
    this.genres = genres;
    this.imdbRating = imdbRating;
    this.poster = poster;
    this.title = title;
    this.year = year;
    this.actors = actors;
  }

  static fromMovieDTO({id, duration, genres, imdbRating, poster, title, year, actors}: MovieDto) {
    return new MovieEntity({
      id,
      duration,
      genres,
      imdbRating,
      poster,
      title,
      year,
      actors
    });
  }
}
