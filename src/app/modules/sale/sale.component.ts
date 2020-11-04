import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Product } from './services/product';
import { ProductService } from './services/product.service';

@Component({
    selector: 'bas-sale',
    templateUrl: 'sale.component.html',
    styleUrls: ['sale.component.css']
})
export class SaleComponent implements AfterViewInit {
    @ViewChild('productId') inputProductId : Component;

    /**
     * Coupon
     */
    coupon: Array<Product> = [];

    /**
     * Product
     */
    productId: number = 0;
    productDescripton: string = '';
    productPriceSale: number = 0;

    /**
     * Events
     */
    descriptionError: any = '';
    visibleError: boolean = false;
    countOnEnterClick: number = 0;
    autoFocusProductId: boolean = true;
    autoFocusQuantity: boolean = false;

    constructor(private productService: ProductService) {}
    
    ngAfterViewInit(): void {
        setTimeout(() => {
            console.log((this.inputProductId));
        }, 3000);   
    }

    onEnter(event: any) : void {
        this.setFocusOnlyQuantity();
        let productId = event.target.value;
        let product = this.productService.getProduct(productId)[0];

        if (!product) {
            this.displayError('Produto não localizado');
            this.setFocusOnlyProductId();
            return;
        }

        if (!this.isSecondClickOnEnter()) {
            this.setFocusOnlyQuantity();
            this.fillForm(product);
            return;
        }

        this.setFocusOnlyProductId();
    }

    private setFocusOnlyProductId() : void {
    }

    private setFocusOnlyQuantity() : void {
        this.autoFocusQuantity = true;
        this.autoFocusProductId = false;
    }

    private fillForm(product: Product) : void {
        this.productId = product.id;
        this.productDescripton = product.description;
        this.productPriceSale = product.price_sale
    }

    private displayError(message: string) : void {
        this.descriptionError = message;
        this.visibleError = true;
        setTimeout(() => this.visibleError = false, 2000);
    }

    private isSecondClickOnEnter() : boolean {
        this.countOnEnterClick++;
        if (this.countOnEnterClick == 2) {
            this.countOnEnterClick = 0;
            return true;
        }
        return false;
    }
}