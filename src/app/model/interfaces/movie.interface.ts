import {GenreEnum} from "../enums/movies/genre.enum";

export interface MovieInterface {
  id: number;
  title: string;
  poster: string;
  genre: GenreEnum[];
  year: number;
  duration: number;
  imdbRating: number;
  actors: number[];
}
