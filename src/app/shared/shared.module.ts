import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputComponent } from './input/input.component';
import { AlertDangerComponent } from './alert/alert.danger.component';

@NgModule({
    declarations: [
        InputComponent,
        AlertDangerComponent
    ],
    imports: [CommonModule],
    exports: [
        InputComponent,
        AlertDangerComponent
    ]
})
export class SharedModule { }