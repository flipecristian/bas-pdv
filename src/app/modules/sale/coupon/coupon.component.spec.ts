import { TestBed } from '@angular/core/testing';
import { CouponComponent } from './coupon.component';

describe('CouponComponent', () => {
    let component: CouponComponent;

    beforeEach((() => {
        TestBed.configureTestingModule({
            declarations: [
                CouponComponent
            ]
        });
        const fixture = TestBed.createComponent(CouponComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('Component Should Instaciad', () => {
        expect(component).toBeTruthy();
    });
});