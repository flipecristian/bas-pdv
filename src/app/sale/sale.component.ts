import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'bas-sale',
    templateUrl: 'sale.component.html'
})
export class SaleComponent implements OnInit {
    ngOnInit(): void {
        console.log('Inicou o component!')
    }
}