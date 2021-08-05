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
  genre: string[] = [];

  onChange = (genre: string[]) => {
  };
  onTouched = () => {
  };

  addChip(event: any) {
    if (event.target.value) {
      console.log(event.target.value);
      this.genre.push(event.target.value as string);
      this.onChange(this.genre);
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

  writeValue(obj: any): void {
    this.genre = obj as [];
  }

  trackByFn(index: number): number {
    return index;
  }

  removeChip(genre: string): void {
    this.onChange(ArrayMethods.removeItem(this.genre, genre));
    this.onTouched();
  }


}
