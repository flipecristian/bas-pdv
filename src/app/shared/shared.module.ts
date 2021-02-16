import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputComponent } from './input/input.component';
import { AlertModule } from './alert/alert.module';

@NgModule({
    declarations: [
        InputComponent
    ],
    imports: [CommonModule],
    exports: [
        InputComponent,
        AlertModule
    ]
})
export class SharedModule { }