import {Component, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

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

  onChange = (genres: string[]) => {
  };
  onTouched = () => {
  };

  addChip(event: any) {
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

  writeValue(obj: any): void {
    this.genres = obj as [];
  }

  trackByFn(index: number): number {
    return index;
  }

  removeChip(genre: string) {
    console.log(genre);
  }
}
