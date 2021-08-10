import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tousd'
})
export class ToUsdPipe implements PipeTransform {

  transform(value: number): number {
    value = value / 0.85
    return value;
  }

}
