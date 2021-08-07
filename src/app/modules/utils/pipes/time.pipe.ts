import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    const hours = Math.floor(value/60);
    const minutesLeft = value % 60;

    return `${hours >= 1 ? `${hours}h` : ''} ${minutesLeft > 0 ? `${minutesLeft < 10 ? '0': ''}${minutesLeft}m`: ''} `

    //return `${hours < 10 ? '0' : ''}${hours}:${minutesLeft < 10 ? '0': ''}${minutesLeft}:00`
  }



}
