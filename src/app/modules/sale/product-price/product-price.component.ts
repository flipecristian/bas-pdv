import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bas-product-price',
  templateUrl: './product-price.component.html',
  styleUrls: ['./product-price.component.css']
})
export class ProductPriceComponent { 
  @Input() price: number = 0.00;
}
