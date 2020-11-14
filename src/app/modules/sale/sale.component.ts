import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from './services/product';
import { ProductService } from './services/product.service';

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
    public totalValueProduct: number;
    public totalSub: number

    /**
     * Coupon
     */
    public coupon: Array<Product> = [];

    /**
     * Events
     */
    public descriptionError: any = '';
    public visibleError: boolean = false;

    public form: FormGroup;


    constructor(private productService: ProductService, private formBuilder: FormBuilder) {
        this.form = this.formBuilder.group({
            product_id: ['', Validators.required],
            description: [''],
            unit_price: [''],
            quantity: ['', Validators.required],
            total_value: [''],
            total_sub: ['']
        });
    }

    /**
     * Display error alert.
     * @param message 
     */
    private displayError(message: string) : void {
        this.descriptionError = message;
        this.visibleError = true;
        setTimeout(() => this.visibleError = false, 2000);
    }

    /**
     * Set focus on field product id.
     */
    public setFocusOnlyProductId() : void {
        let inputElement = document.getElementById('bas-product-id');
        inputElement.focus();
    }

    /**
     * Set focus on field.
     */
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
        this.form.controls['unit_price'].setValue(product.price_sale);
        this.form.controls['total_value'].setValue(product.price_sale);
        this.form.controls['total_sub'].setValue(product.price_sale);
    }

    private clearForm() : void {
        this.form.reset('');
    }

    // Events

    /**
     * Event onEnter do campo ID do Produto
     * @param event 
     */
    public onEnterProductId(productId: number) : void {
        let product = this.productService.getProduct(productId);
        if (!product) {
            this.displayError('Produto não localizado');
            return null;
        }
        this.currentProduct = product;
        this.fillForm(this.currentProduct);
        this.setFocusOnlyQuantity();
    }

    /**
     * @param event 
     */
    public onEnterQuantity(event: any) : void {
        let quantity = parseInt(event.target.value);
        this.currentProduct.quantity = quantity;
        this.totalValueProduct = this.currentProduct.quantity * this.currentProduct.price_sale;
        this.totalSub += this.totalValueProduct;
        this.coupon.push(this.currentProduct);
        this.clearForm();
        this.setFocusOnlyProductId(); 
    }
}