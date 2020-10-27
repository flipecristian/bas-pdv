import { Product } from '../models/product';

export class ProductController {

    private productModel : any;

    constructor() { 
        this.productModel = new Product
    }

    getProductById(content: any) : any {
        let productId = content.id;
        return this.productModel.findById(productId);
    }

}