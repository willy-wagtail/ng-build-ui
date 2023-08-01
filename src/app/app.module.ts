import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter-page/counter/counter.component';
import { CounterPageComponent } from './counter-page/counter-page.component';
import { FormsModule } from '@angular/forms';
import { NumberComponent } from './counter-page/number/number.component';
import { DigitComponent } from './counter-page/digit/digit.component';

@NgModule({
  declarations: [AppComponent, CounterComponent, CounterPageComponent, NumberComponent, DigitComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
