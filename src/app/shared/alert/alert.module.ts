import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertDangerComponent } from './danger/alert.danger.component';
import { AlertSuccessComponent } from './success/alert.success.component';

@NgModule({
    declarations: [
        AlertDangerComponent,
        AlertSuccessComponent
    ],
    imports: [CommonModule],
    exports: [
        AlertDangerComponent,
        AlertSuccessComponent
    ]
})
export class AlertModule { }