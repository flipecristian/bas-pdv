import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuComponent } from './modules/menu/menu.component';
import { OpeningCashiersComponent } from './modules/opening_cashiers/opening_cashiers.component';
import { SaleComponent } from './modules/sale/sale.component';

const routes: Routes = [
    { path: 'menu', component: MenuComponent },
    { path: 'sale', component: SaleComponent },
    { path: '**', component: OpeningCashiersComponent }
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