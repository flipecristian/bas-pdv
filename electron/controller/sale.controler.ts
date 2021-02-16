import { Sale } from '../models/sale';

export class SaleController {

    private saleModel : Sale;

    constructor() { 
        this.saleModel = new Sale;
    }
    
    finalizeSale(content: any) : any {
        return this.saleModel.finalizeSale(content);
    }

}