import { ProductController } from '../controller/product.controler';
import { SaleController } from '../controller/sale.controler';
import { UserController } from '../controller/user.controler';
import { ProductEnum } from './productEnum';
import { UserEnum } from './userEnum';

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
            break;
            case UserEnum.OPERATION_LOGIN:
                let userController = new UserController;
                result = userController.login(this.content);
            break;
        }
        return result;
    }
}