import { NgModule } from '@angular/core';
import { ToUsdPipe } from './pipe/tousd.pipe';
import { FormsModule } from '@angular/forms';
import { CurrencyConverterPipe } from './pipe/currency-converter.pipe';



@NgModule({
  declarations: [
    ToUsdPipe,
    CurrencyConverterPipe
  ],
  imports: [
    FormsModule
  ],
  exports : [
    ToUsdPipe,
    FormsModule,
    CurrencyConverterPipe
  ]
})
export class SharedModule { }
