import { ProductController } from '../controller/product.controler';
import { SaleController } from '../controller/sale.controler';
import { ProductEnum } from './productEnum';

export class Message {
    private type : string;
    private content : object;

    /**
     * @param messageObject 
     */
    constructor (messageObject: any) {
        try {
            this.type = messageObject.type;
            this.content = messageObject.content;
        } catch (err) {
            console.error(err)
        }
    }
    
    process () : any {
        let result = null;
        switch (this.type) {
            case ProductEnum.GET_PRODUCT:
                let productController = new ProductController;
                result = productController.getProductById(this.content);
            break;
            case ProductEnum.FINALIZE_SALE:
                let saleController = new SaleController;
                result = saleController.finalizeSale(this.content);
        }
        return result;
    }
}