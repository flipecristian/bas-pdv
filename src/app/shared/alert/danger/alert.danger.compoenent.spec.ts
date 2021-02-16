import { TestBed } from '@angular/core/testing';
import { AlertDangerComponent } from './alert.danger.component';


describe('AlertDangerComponent', () => {
    let component: AlertDangerComponent;

    beforeEach((() => {
        TestBed.configureTestingModule({
            declarations: [
                AlertDangerComponent
            ]
        });
        const fixture = TestBed.createComponent(AlertDangerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('Component Should Instaciad', () => {
        expect(component).toBeTruthy();
    });
});