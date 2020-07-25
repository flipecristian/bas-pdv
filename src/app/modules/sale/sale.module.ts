import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDescriptionModule } from './product-description/product-description.module';
import { ProductPriceModule } from './product-price/product-price.module';
import { SaleComponent } from './sale.component';

@NgModule({
    declarations: [
        SaleComponent
    ],
    imports: [
        CommonModule,
        ProductDescriptionModule,
        ProductPriceModule
    ]
})
export class SaleModule { }