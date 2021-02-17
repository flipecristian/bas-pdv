import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component'; 
import { AppRoutingModule } from './app.routing.module';
import { SaleModule } from './modules/sale/sale.module';
import { MenuModule } from './modules/menu/menu.module';
import { ReactiveFormsModule } from '@angular/forms';
import { OpeningCashiersModule } from './modules/opening_cashiers/opening_cashiers.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SaleModule,
    MenuModule,
    ReactiveFormsModule,
    OpeningCashiersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
