import {CompanyEnum} from "../../enums/movie/company.enum";

export interface MovieInterface {
  id: number;
  title: string;
  poster: string;
  genre: string[];
  year: number;
  duration: number;
  imdbRating: number;
  actors: number[];
  company: CompanyEnum;
}
