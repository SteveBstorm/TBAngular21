import { NgModule } from '@angular/core';
import { ToUsdPipe } from './pipe/tousd.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CurrencyConverterPipe } from './pipe/currency-converter.pipe';
import { TotimePipe } from './pipe/totime.pipe';
import { SurlignerDirective } from './directives/surligner.directive';
import { FourofourComponent } from './components/fourofour/fourofour.component';



@NgModule({
  declarations: [
    ToUsdPipe,
    CurrencyConverterPipe,
    TotimePipe,
    SurlignerDirective,
    FourofourComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  exports : [
    ToUsdPipe,
    FormsModule,
    CurrencyConverterPipe,
    TotimePipe,
    SurlignerDirective,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
