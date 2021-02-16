import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from './services/product';
import { ProductService } from './services/product.service';
import { debounceTime } from 'rxjs/operators';

@Component({
    selector: 'bas-sale',
    templateUrl: 'sale.component.html',
    styleUrls: ['sale.component.css']
})
export class SaleComponent {
    /**
     * Product
     */
    public currentProduct: Product; // Produto corrente (que está sendo vendido nomento)
    public totalValueProduct: number = 0.00;
    public totalSub: number = 0.00;
    

    /**
     * Coupon
     */
    public coupon: Array<Product> = [];

    /**
     * Events display message
     */
    public descriptionError: string = '';
    public visibleError: boolean = false;

    public descriptionSuccess: string = '';
    public visibleSuccess: boolean = false;
    
    private timer: any;

    public form: FormGroup;


    constructor(
        private productService: ProductService, 
        private formBuilder: FormBuilder
    ) {
        this.form = this.formBuilder.group({
            product_id: ['', Validators.required],
            description: [{value: '', disabled: true}],
            unit_price: [{value: '', disabled: true}],
            quantity: ['', Validators.required],
            total_value: [{value: '', disabled: true}],
            total_sub: [{value: '', disabled: true}]
        });
    }

    private displayError(message: string) : void {
        this.descriptionError = message;
        this.visibleError = true;
        setTimeout(() => this.visibleError = false, 2000);
    }

    private displaySuccess(message: string) : void {
        this.descriptionSuccess = message;
        this.visibleSuccess = true;
        setTimeout(() => this.visibleSuccess = false, 3000);
    }

    public setFocusOnlyProductId() : void {
        let inputElement = document.getElementById('bas-product-id');
        inputElement.focus();
    }

    private setFocusOnlyQuantity() : void {
        let inputElement : HTMLInputElement = <HTMLInputElement> document.getElementById('bas-product-quantity');
        inputElement.focus();
        inputElement.select();
    }

    /**
     * Fill product form.
     * @param product 
     */
    private fillForm(product: Product) : void {
        this.form.controls['description'].setValue(product.description);   
        this.form.controls['quantity'].setValue(1);
        this.form.controls['unit_price'].setValue(product.price_sale.toFixed(2));
        this.form.controls['total_value'].setValue(product.price_sale.toFixed(2));
    }

    /**
     * Fill field total sub in form.
     * @param totalSub 
     */
    private fillFieldTotalSub(totalSub: number) {
        this.form.controls['total_sub'].setValue(totalSub.toFixed(2));
    }

    private clearForm() : void {
        this.form.reset('');
    }

    private clearCupon(): void {
        this.coupon = [];
    }

    private clearFormWithOutTotalSub() : void {
        this.form.reset({
            total_sub: this.form.get('total_sub').value
        });
    }

    // Events

    onEnterProductId(productId: number) : void {
        let product = this.productService.getProduct(productId)[0];
        if (!product) {
            this.displayError('Produto não localizado');
            return null;
        }
        this.currentProduct = product;
        this.fillForm(this.currentProduct);
        this.setFocusOnlyQuantity();
    }

    onEnterQuantity(quantity: number) : void {
        this.currentProduct.quantity = quantity;
        this.totalValueProduct = this.currentProduct.quantity * this.currentProduct.price_sale;
        this.totalSub += this.totalValueProduct;
        
        this.fillFieldTotalSub(this.totalSub);

        this.coupon.push(this.currentProduct);
        
        this.clearFormWithOutTotalSub();
        this.setFocusOnlyProductId(); 
    }

    onChangeQuantity(quantity: number) : void {
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
            if (quantity == 0 || quantity == undefined) {
                quantity = 1;
            }
            this.currentProduct.quantity = quantity;
            this.totalValueProduct = this.currentProduct.quantity * this.currentProduct.price_sale;
            this.form.controls['total_value'].setValue(this.totalValueProduct.toFixed(2));
            this.setFocusOnlyQuantity();
        }, 100)   
    }

    finalizeSale() : void {
        let objectSale = this.makeObjectSale();
        this.productService.finalizeSale(objectSale);
        this.clearForm();
        this.clearCupon();
        this.displaySuccess('Venda finalizada com sucesso!');
    }

    // End Events

    makeObjectSale() : any {
        return {
            cupon: this.coupon,
            total_value: this.totalSub
        }
    }
}