import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MovieModalService {

  openMovieModal(): Observable<boolean> {
    return of(true);
  }

  closeMovieModal(): Observable<boolean> {
    return of(false);
  }
}
