import { NgModule } from '@angular/core';
import { ToUsdPipe } from './pipe/tousd.pipe';
import { FormsModule } from '@angular/forms';
import { CurrencyConverterPipe } from './pipe/currency-converter.pipe';
import { TotimePipe } from './pipe/totime.pipe';



@NgModule({
  declarations: [
    ToUsdPipe,
    CurrencyConverterPipe,
    TotimePipe
  ],
  imports: [
    FormsModule
  ],
  exports : [
    ToUsdPipe,
    FormsModule,
    CurrencyConverterPipe,
    TotimePipe
  ]
})
export class SharedModule { }
