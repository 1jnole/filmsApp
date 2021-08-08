import {MovieInterface} from '../../interfaces/movie/movie.interface';
import {MovieDto} from '../../dto/movie/movie.dto';
import {UuidGenerator} from "../../../modules/utils/utilities/uuid-generator";
import {CompanyEnum} from "../../enums/movie/company.enum";


export class MovieEntity implements MovieInterface {
  id: number;
  title: string;
  poster: string;
  genre: string[];
  year: number;
  duration: number;
  imdbRating: number;
  actors: number[];
  company: CompanyEnum;

  constructor({id, duration, genre, imdbRating, poster, title, year, actors, company}: MovieInterface) {
    this.id = id;
    this.duration = duration;
    this.genre = genre;
    this.imdbRating = imdbRating;
    this.poster = poster;
    this.title = title;
    this.year = year;
    this.actors = actors;
    this.company = company;
  }

  static fromMovieDTO({id, duration, genre, imdbRating, poster, title, year, actors, company}: MovieDto) {
    return new MovieEntity({
      id,
      duration,
      genre,
      imdbRating,
      poster,
      title,
      year,
      actors,
      company: company
    });
  }

  static toMovieDTO({duration, genre, imdbRating, poster, title, year, actors, company}: MovieDto) {
    return {
      id: UuidGenerator.newUuid(),
      duration: parseInt(duration?.toString(), 10),
      genre,
      imdbRating: parseInt(imdbRating?.toString(), 10),
      poster,
      title,
      year,
      actors,
      company: company
    }
  }
}
