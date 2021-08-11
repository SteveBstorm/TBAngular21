import { NgModule } from '@angular/core';
import { ToUsdPipe } from './pipe/tousd.pipe';
import { FormsModule } from '@angular/forms';
import { CurrencyConverterPipe } from './pipe/currency-converter.pipe';
import { TotimePipe } from './pipe/totime.pipe';
import { SurlignerDirective } from './directives/surligner.directive';



@NgModule({
  declarations: [
    ToUsdPipe,
    CurrencyConverterPipe,
    TotimePipe,
    SurlignerDirective
  ],
  imports: [
    FormsModule
  ],
  exports : [
    ToUsdPipe,
    FormsModule,
    CurrencyConverterPipe,
    TotimePipe,
    SurlignerDirective
  ]
})
export class SharedModule { }
