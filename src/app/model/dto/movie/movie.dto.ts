import {GenreEnum} from "../../enums/movie/genre.enum";

export interface MovieDto {
  id: number;
  title: string;
  poster: string;
  genre: GenreEnum[];
  year: number;
  duration: number;
  imdbRating: number;
  actors: number[];
}

