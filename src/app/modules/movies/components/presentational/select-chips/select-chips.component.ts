import {Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {ActorsInterface} from "../../../../../model/interfaces/movie/actors.interface";


@Component({
  selector: 'app-select-chips',
  templateUrl: './select-chips.component.html',
  styleUrls: ['./select-chips.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectChipsComponent),
      multi: true
    }
  ]
})
export class SelectChipsComponent implements ControlValueAccessor {

  @Input() options: ActorsInterface[] = [];
 // @Output() updatedOptions = new EventEmitter<{ item: string, mode: SelectModeEnum }>();

  selectedValues: string[] = [];

  onChange = (options: string[]) => {
  };
  onTouched = () => {
  };

  onOptionsSelected(element: string) {
    this.selectedValues.push(element);
  //  this.updatedOptions.emit({item: element, mode: SelectModeEnum.ADD});
    this.onChange(this.selectedValues);
    this.onTouched();
  }

  writeValue(obj: string[]): void {
    this.selectedValues = obj ? JSON.parse(JSON.stringify(obj)) : [];
  }

  registerOnChange(fn: (value: any) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  trackByFn(index: number, actors: ActorsInterface): number {
    return actors.id;
  }

  removeElement(element: string): void {
  //  this.updatedOptions.emit({item: element, mode: SelectModeEnum.REMOVE});
   // this.onChange(ArrayMethods.removeItem(this.selectedValues, element));
    this.onTouched();
  }
}
