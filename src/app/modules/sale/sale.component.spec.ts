import { CommonModule } from '@angular/common';
import { TestBed } from '@angular/core/testing'
;
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CouponComponent } from './coupon/coupon.component';
import { HeaderComponent } from './header/header.component';
import { SaleComponent } from './sale.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductService } from './services/product.service';

describe('SaleComponent', () => {
    let component: SaleComponent;
    let productServiceSpy: jasmine.SpyObj<ProductService>;

    beforeEach((() => {
        productServiceSpy = jasmine.createSpyObj('ProductService', ['getProduct']);

        TestBed.configureTestingModule({
            declarations: [
                SaleComponent,
                CouponComponent,
                HeaderComponent
            ],
            imports: [
                CommonModule,
                SharedModule,
                FormsModule, 
                ReactiveFormsModule
            ],
            providers: [
                { provide: ProductService, useValue: productServiceSpy}
            ]
        });
        
        const fixture = TestBed.createComponent(SaleComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('Component Should Instaciad', () => {
        expect(component).toBeTruthy();
    });

    it('Should fill product', () => {
        // Arrange
        const fixtureProduct = {
            _id: 'kah2982hsaqa',
            id: 1,
            description: 'Something',
            price_sale: 22.99,
            quantity: 1
        }
        productServiceSpy.getProduct.and.returnValue(fixtureProduct);
        
        // Act && Assert
        expect(component.onEnterProductId(1)).toBeUndefined;
        expect(component.currentProduct._id).toEqual(fixtureProduct._id);
        expect(component.currentProduct.id).toEqual(fixtureProduct.id);
        expect(component.currentProduct.description).toEqual(fixtureProduct.description);
        expect(component.currentProduct.price_sale).toEqual(fixtureProduct.price_sale);
        expect(component.currentProduct.quantity).toEqual(fixtureProduct.quantity);
    });

    it('Should display error message if product not found', () => {
        // Arrange
        productServiceSpy.getProduct.and.returnValue(null);

        // Act
        component.onEnterProductId(1);

        // Assert
        expect(component.onEnterProductId(0)).toBeUndefined;
        expect(component.descriptionError).toEqual('Produto não localizado');
        expect(component.currentProduct).toBeUndefined();
    })
});