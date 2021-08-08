import {ActorsInterface} from "../../interfaces/movie/actors.interface";

export class ActorsEntity implements ActorsInterface {
  id: number;
  name: string;

  constructor({id, name}: ActorsInterface) {
    this.id = id;
    this.name = name;
  }

}
