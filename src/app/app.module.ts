import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component'; 
import { AppRoutingModule } from './app.routing.module';
import { SaleModule } from './sale/sale.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SaleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
