import { Component } from '@angular/core';
import { ProductService } from './services/product.service';

@Component({
    selector: 'bas-sale',
    templateUrl: 'sale.component.html',
    styleUrls: ['sale.component.css']
})
export class SaleComponent {
    productId: number = 0;
    productDescripton: string = '';
    productPrice: number = 0;

    constructor(private productService: ProductService) {}

    onEnter(event: any) : void {
        this.productService.getProduct(event.target.value);
    }
}