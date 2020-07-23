import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDescriptionComponent } from './product-description/product-description.component';
import { ProductPriceComponent } from './product-price/product-price.component';
import { SaleComponent } from './sale.component';

@NgModule({
    declarations: [
        ProductDescriptionComponent,
        ProductPriceComponent,
        SaleComponent
    ],
    imports: [
        CommonModule
    ]
})
export class SaleModule { }