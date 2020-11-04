import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaleComponent } from './sale.component';
import { CouponComponent } from './coupon/coupon.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    declarations: [
        SaleComponent,
        CouponComponent,
        HeaderComponent
    ],
    imports: [
        CommonModule,
        SharedModule
    ]
})
export class SaleModule { }