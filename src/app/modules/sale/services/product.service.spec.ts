import { ProductService } from './product.service';
describe('ProductService', () => {
    it('should instace the object', () => {
        const productService = new ProductService;
        expect(productService).toBeTruthy();
    });
});