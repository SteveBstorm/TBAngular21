import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyConverter'
})
export class CurrencyConverterPipe implements PipeTransform {

  transform(value: number, currency : string): string {
    if(currency == "tousd") return value / 0.85 + '$';
    if(currency == "toeur") return value * 0.85 + '€';
    return "Pas une option valide"
  }

}
