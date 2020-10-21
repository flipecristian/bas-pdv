import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuComponent } from './modules/menu/menu.component';
import { SaleComponent } from './modules/sale/sale.component';

const routes: Routes = [
    { path: 'menu', component: MenuComponent },
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