import { TestBed } from '@angular/core/testing';
import { MenuComponent } from './menu.component';


describe('InputComponent', () => {
    let component: MenuComponent;

    beforeEach((() => {
        TestBed.configureTestingModule({
            declarations: [
                MenuComponent
            ]
        });
        const fixture = TestBed.createComponent(MenuComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('Component Should Instaciad', () => {
        expect(component).toBeTruthy();
    });
});