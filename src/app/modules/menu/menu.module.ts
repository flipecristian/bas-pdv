import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { MenuComponent } from './menu.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule
    ],
    declarations: [
        MenuComponent
    ]
})
export class MenuModule { }