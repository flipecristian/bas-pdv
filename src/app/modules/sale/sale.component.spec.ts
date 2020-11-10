import { CommonModule } from '@angular/common';
import { TestBed } from '@angular/core/testing'
;
import { SharedModule } from 'src/app/shared/shared.module';
import { CouponComponent } from './coupon/coupon.component';
import { HeaderComponent } from './header/header.component';
import { SaleComponent } from './sale.component';

describe('SaleComponent', () => {
    let component: SaleComponent;

    beforeEach((() => {
        TestBed.configureTestingModule({
            declarations: [
                SaleComponent,
                CouponComponent,
                HeaderComponent
            ],
            imports: [
                CommonModule,
                SharedModule
            ]
        });
        const fixture = TestBed.createComponent(SaleComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('Component Should Instaciad', () => {
        expect(component).toBeTruthy();
    });
});