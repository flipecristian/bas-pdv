import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaleComponent } from './modules/sale/sale.component';

const routes: Routes = [
    { path: 'sale', component: SaleComponent },
    { path: '**', component: SaleComponent }
];

@NgModule({
    imports: [ 
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }