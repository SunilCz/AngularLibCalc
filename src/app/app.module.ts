import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CalculatorLibModule } from 'calculator-lib'; // Import your library module

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CalculatorLibModule], // Use the library module here
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
