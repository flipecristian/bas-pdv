import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OpeningCashiersComponent } from './opening_cashiers.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
    imports: [
        CommonModule,
        SharedModule
    ],
    declarations: [
        OpeningCashiersComponent
    ]
})
export class OpeningCashiersModule { }