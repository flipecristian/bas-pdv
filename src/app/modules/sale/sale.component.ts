import { AfterViewInit, Component } from '@angular/core';
import { Product } from './services/product';
import { ProductService } from './services/product.service';

@Component({
    selector: 'bas-sale',
    templateUrl: 'sale.component.html',
    styleUrls: ['sale.component.css']
})
export class SaleComponent implements AfterViewInit {

    /**
     * Coupon
     */
    private coupon: Array<Product> = [];

    /**
     * Product
     */
    private productId: number = 0;
    private productDescripton: string = '';
    private productPriceSale: number = 0;

    /**
     * Sale
     */
    private totalValue: number = 0.00;
    private subTotal: number = 0.00

    /**
     * Events
     */
    private descriptionError: any = '';
    private visibleError: boolean = false;
    private autoFocusProductId: boolean = true;
    private autoFocusQuantity: boolean = false;

    /**
     * Produto corrente (que está sendo vendido nomento).
     */
    private currentProduct: Product;

    constructor(private productService: ProductService) {}
    
    ngAfterViewInit(): void {
        setTimeout(() => {
            let input = document.getElementById('bas-product-id');
            input.focus();
            console.log('foi')
        }, 3000);   
    }

    /**
     * Event onEnter do campo ID do Produto
     * @param event 
     */
    onEnterProductId(event: any) : void {
        let productId = event.target.value;
        let product = this.productService.getProduct(productId)[0];
        if (!product) {
            this.displayError('Produto não localizado');
            return;
        }
        this.currentProduct = product;
        this.fillForm(this.currentProduct);
        this.setFocusOnlyQuantity();
    }

    onEnterQuantity(event: any) : void {
        let quantity = parseInt(event.target.value);
        this.currentProduct.quantity = quantity;
        this.totalValue = this.currentProduct.quantity * this.currentProduct.price_sale;
        this.subTotal += this.totalValue;
        this.coupon.push(this.currentProduct);
        this.setFocusOnlyProductId(); 
    }

    private setFocusOnlyProductId() : void {
        let inputElement = document.getElementById('bas-product-id_ic');
        inputElement.focus();
    }

    private setFocusOnlyQuantity() : void {
        let inputElement = document.getElementById('bas-product-quantity_ic');
        inputElement.focus();
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
}