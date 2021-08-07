import {Component, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {ArrayMethods} from "../../../../utils/utilities/array-methods";

@Component({
  selector: 'app-genre-chips',
  templateUrl: './genre-chips.component.html',
  styleUrls: ['./genre-chips.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => GenreChipsComponent),
      multi: true
    }
  ]
})
export class GenreChipsComponent implements ControlValueAccessor {

  disabled = false;
  touched = false;
  genres: string[] = [];
  genre: string = '';

  onChange = (genre: string[]) => {
  };
  onTouched = () => {
  };

  addElement(event: any) {
    if (event.target.value) {
      this.genres.push(event.target.value as string);
      this.onChange(this.genres);
      this.onTouched();
      event.target.value = null;
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(obj: string []): void {
    this.genres = JSON.parse(JSON.stringify(obj));
  }

  trackByFn(index: number): number {
    return index;
  }

  removeElement(genre: string): void {
    this.onChange(ArrayMethods.removeItem(this.genres, genre));
    this.onTouched();
  }


}
