import { Component } from '@angular/core';
import { ProductService } from './product.service';

@Component({
    selector: 'baas-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})
  
export class ProductComponent {
    constructor (private productService: ProductService) {}
    description = "PIZZA BLOCOLIS";
}