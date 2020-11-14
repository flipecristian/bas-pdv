import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaleComponent } from './sale.component';
import { CouponComponent } from './coupon/coupon.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        SaleComponent,
        CouponComponent,
        HeaderComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        FormsModule, 
        ReactiveFormsModule
    ]
})
export class SaleModule { }