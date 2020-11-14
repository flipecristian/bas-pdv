import { Component, Input } from '@angular/core';
import { Product } from '../services/product';

@Component({
    selector: 'bas-coupon',
    templateUrl: './coupon.component.html'
})
export class CouponComponent { 
    @Input() coupon: Array<Product>;

    ngAfterViewInit(): void {
        setTimeout(() => {
            console.log(this.coupon);
        }, 7000);   
    }
}